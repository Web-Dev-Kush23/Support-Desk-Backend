const Ticket = require("../models/Ticket");
const User = require("../models/User");
const path = require("path");
const fs = require("fs");

function makeTicketNumber() {
  return "TKT-" + Date.now().toString().slice(-8);
}

exports.createTicket = async (req, res) => {
  try {
    console.log("Form fields:", req.body);
    console.log("Uploaded file:", req.file);

    // Example minimal response
    res.status(201).json({
      ticketNumber: "TICKET-" + Date.now(),
      fileUploaded: !!req.file,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }

  const { name, contactNo, email, serviceType, issue, userId } = req.body;
  let imageUrl = null;
  if (req.file) {
    imageUrl = `/uploads/${req.file.filename}`;
  }
  // optional associate user
  let user = null;
  if (userId) user = await User.findById(userId);

  const ticket = await Ticket.create({
    ticketNumber: makeTicketNumber(),
    name,
    contactNo,
    email,
    serviceType,
    issue,
    imageUrl,
    createdBy: user ? user._id : undefined,
  });
  res.status(201).json({ ticketNumber: ticket.ticketNumber, id: ticket._id });
};

exports.getTicketsForUser = async (req, res) => {
  const { contactNo } = req.params;
  const tickets = await Ticket.find({ contactNo }).sort({ createdAt: -1 });
  res.json(tickets);
};

exports.getAllTickets = async (req, res) => {
  const tickets = await Ticket.find().sort({ createdAt: -1 });
  res.json(tickets);
};

exports.updateTicket = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  body.updatedAt = new Date();
  const ticket = await Ticket.findByIdAndUpdate(id, body, { new: true });
  if (!ticket) return res.status(404).json({ message: "Not found" });
  res.json(ticket);
};
