const Doctor = require("../models/doctorModel");
const User = require("../models/userModel");

// ===============================
// Apply Doctor
// ===============================
const applyDoctor = async (req, res) => {
  try {
    const doctor = new Doctor({
      ...req.body,
      status: "pending",
    });

    await doctor.save();

    // Notify admin
    const adminUser = await User.findOne({ type: "admin" });

    if (adminUser) {
      adminUser.notification.push({
        type: "doctor-apply-request",
        message: `${doctor.fullname} has applied for a doctor account`,
        data: {
          doctorId: doctor._id,
        },
      });
      await adminUser.save();
    }

    res.status(201).json({
      success: true,
      message: "Doctor application submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Approve Doctor (ADMIN)
// ===============================
const approveDoctor = async (req, res) => {
  try {
    const { doctorId } = req.body;

    const doctor = await Doctor.findByIdAndUpdate(
      doctorId,
      { status: "approved" },
      { new: true }
    );

    const user = await User.findById(doctor.userID);
    user.isdoctor = true;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Doctor approved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Get All Approved Doctors (USER)
// ===============================
const getAllApprovedDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({ status: "approved" });
    res.status(200).json({
      success: true,
      doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Get All Pending Doctors (ADMIN)
// ===============================
const getPendingDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({ status: "pending" });
    res.status(200).json({
      success: true,
      doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// EXPORTS
// ===============================
module.exports = {
  applyDoctor,
  approveDoctor,
  getAllApprovedDoctors,
  getPendingDoctors,
};
