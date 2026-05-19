const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, path.join(__dirname, "..", "uploads")),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });
const ticketController = require("../controllers/ticketController");
const { protect } = require("../middleware/auth");

router.post("/", upload.single("image"), ticketController.createTicket);
router.get("/user/:contactNo", ticketController.getTicketsForUser);
// admin endpoints
router.get("/", protect, ticketController.getAllTickets);
router.put("/:id", protect, ticketController.updateTicket);

module.exports = router;
