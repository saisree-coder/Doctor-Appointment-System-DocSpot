const express = require("express");
const {
  bookAppointment,
  getUserAppointments,
  updateAppointmentStatus,
} = require("../controllers/appointmentController");

const router = express.Router();

// Book appointment
router.post("/book", bookAppointment);

// User appointment history
router.post("/user-appointments", getUserAppointments);

// Doctor updates appointment status
router.post("/update-status", updateAppointmentStatus);

module.exports = router;
