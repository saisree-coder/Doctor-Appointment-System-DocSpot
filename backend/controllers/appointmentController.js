const Appointment = require("../models/appointmentModel");
const User = require("../models/userModel");

// 1️⃣ Book Appointment
const bookAppointment = async (req, res) => {
  try {
    const appointment = new Appointment({
      ...req.body,
      status: "pending",
    });

    await appointment.save();

    // Notify doctor
    const doctorUser = await User.findById(req.body.doctorInfo.userID);
    if (doctorUser) {
      doctorUser.notification.push({
        type: "new-appointment-request",
        message: "You have a new appointment request",
      });
      await doctorUser.save();
    }

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 2️⃣ Get User Appointments (Booking History)
const getUserAppointments = async (req, res) => {
  try {
    const { email } = req.body;

    const appointments = await Appointment.find({
      "userInfo.email": email,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 3️⃣ Update Appointment Status (Doctor)
const updateAppointmentStatus = async (req, res) => {
  try {
    const { appointmentId, status } = req.body;

    await Appointment.findByIdAndUpdate(
      appointmentId,
      { status },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Appointment status updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  bookAppointment,
  getUserAppointments,
  updateAppointmentStatus,
};
