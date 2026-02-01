const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    doctorInfo: {
      type: Object,
      required: true,
    },
    userInfo: {
      type: Object,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    document: {
      type: String, // file name or URL
    },
    status: {
      type: String,
      default: "pending", // pending | approved | cancelled | completed
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("appointments", appointmentSchema);
