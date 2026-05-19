const express = require("express");
const router = express.Router();
const { requestOtp, verifyOtp } = require("../controllers/authController");
router.post("/request-otp", requestOtp);
router.post("/verify-otp", verifyOtp);
// POST /admin/signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await Admin.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ name, email, password: hashed });

    res.status(201).json({ message: "Admin registered successfully", admin });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
