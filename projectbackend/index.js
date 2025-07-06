const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require("./connection");
const UserModel = require("./model/users");
const AidRequest = require("./model/aidRequest");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (_req, res) => res.send('✅ ResQNet registration API running'));

// ─────────── Register ───────────
app.post('/api/register', async (req, res) => {
  try {
    const { fullName, email, phone, role, password, confirmPassword } = req.body;

    // Basic validation
    if (!fullName || !email || !phone || !role || !password || !confirmPassword)
      return res.status(400).json({ message: 'All fields are required' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Passwords do not match' });

    // Prevent duplicate email
    if (await UserModel.findOne({ email }))
      return res.status(400).json({ message: 'Email already registered' });

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Save user
    await UserModel.create({ fullName, email, phone, role, password:passwordHash });

        res.status(201).json({ message: 'User registered successfully', role });
       
  } catch (err) {
  console.error('[REGISTER ERROR]', err);      // full stack in terminal
  res.status(500).json({ message: err.message }); // exact message to frontend
}

});
const multer = require('multer');
const path = require('path');

// Serve uploaded files from /uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

app.post('/api/request-aid', upload.fields([
  { name: 'disabilityCert', maxCount: 1 },
  { name: 'incomeCert', maxCount: 1 }
]), async (req, res) => {
  try {
    const {
      fullName,
      address,
      phoneNumber,
      annualIncome,
      urgency,
      selectedAids
    } = req.body;

    const disabilityCertPath = req.files['disabilityCert']?.[0]?.path || '';
    const incomeCertPath = req.files['incomeCert']?.[0]?.path || '';

    const newAidRequest = new AidRequest({
      fullName,
      address,
      phoneNumber,
      annualIncome,
      urgency,
      selectedAids: JSON.parse(selectedAids),
      disabilityCertPath,
      incomeCertPath
    });

    await newAidRequest.save();
    res.status(201).json({ message: 'Aid request submitted successfully' });
  } catch (err) {
    console.error('[AID REQUEST ERROR]', err);
    res.status(500).json({ message: 'Error submitting aid request' });
  }
});

// ─────────── Start server ───────────
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));