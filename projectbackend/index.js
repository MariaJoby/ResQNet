const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require("./connection");
const UserModel = require("./model/users");
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
        if (res.status === 201) {
      const { role } = res.data;

      // redirect based on role
      if (role === 'volunteer') navigate('/v');
      else if (role === 'patient') navigate('/p');
      else navigate('/d');
    }
  } catch (err) {
  console.error('[REGISTER ERROR]', err);      // full stack in terminal
  res.status(500).json({ message: err.message }); // exact message to frontend
}

});

// ─────────── Start server ───────────
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));