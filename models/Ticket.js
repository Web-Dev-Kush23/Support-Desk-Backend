const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  ticketNumber: { type: String, unique: true, index: true },
  name: String,
  contactNo: String,
  email: String,
  serviceType: { type: String, enum: ["Storage", "Relocation"] },
  issue: String,
  imageUrl: String,
  status: {
    type: String,
    enum: ["Open", "In Progress", "Closed"],
    default: "Open",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ticket", ticketSchema);
