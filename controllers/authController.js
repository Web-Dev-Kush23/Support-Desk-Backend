const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

exports.requestOtp = async (req, res) => {
  const { phone, email } = req.body;
  if (!phone && !email)
    return res.status(400).json({ message: "phone or email required" });

  const identifier = phone || email;
  const query = phone ? { phone } : { email };
  let user = await User.findOne(query);
  if (!user) user = await User.create(query);

  const otp = generateOTP();
  const expiry = new Date(
    Date.now() + parseInt(process.env.OTP_EXPIRY_MINUTES || "10") * 60 * 1000
  );
  user.otp = otp;
  user.otpExpiresAt = expiry;
  await user.save();

  // TODO: send OTP over SMS/email using provider in production
  console.log(`OTP for ${identifier}: ${otp}`);

  res.json({ message: "OTP sent (mock). Check server logs in dev." });
};

exports.verifyOtp = async (req, res) => {
  const { phone, email, otp } = req.body;
  const query = phone ? { phone } : { email };
  const user = await User.findOne(query);
  if (!user) return res.status(400).json({ message: "User not found" });
  if (!user.otp || user.otp !== otp)
    return res.status(400).json({ message: "Invalid OTP" });
  if (user.otpExpiresAt < new Date())
    return res.status(400).json({ message: "OTP expired" });

  // create token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secret", {
    expiresIn: "7d",
  });
  user.otp = undefined;
  user.otpExpiresAt = undefined;
  await user.save();
  res.json({ token });
};
