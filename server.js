require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// ✅ Check if environment variables are loading
if (!process.env.MONGO_URI) {
  console.error(
    "❌ MONGO_URI is missing in environment variables. Check your .env file."
  );
  process.exit(1);
}

const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

// Middleware
app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

// ✅ Connect to MongoDB and start server
connectDB(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  });
