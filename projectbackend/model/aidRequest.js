const mongoose = require('mongoose');

const AidRequestSchema = new mongoose.Schema({
  fullName: String,
  address: String,
  phoneNumber: String,
  annualIncome: String,
  urgency: String,
  selectedAids: [String],
  disabilityCertPath: String,
  incomeCertPath: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('AidRequest', AidRequestSchema);
