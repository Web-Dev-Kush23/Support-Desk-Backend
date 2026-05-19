const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, index: true, sparse: true },
  phone: { type: String, index: true, sparse: true },
  otp: String,
  otpExpiresAt: Date,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
