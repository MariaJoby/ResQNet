const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    fullName:     { type: String, required: true, trim: true },
    email:        { type: String, required: true, unique: true, lowercase: true },
    phone:        { type: String, required: true },
    role:         { type: String, enum: ['patient', 'volunteer', 'ngo'], required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
