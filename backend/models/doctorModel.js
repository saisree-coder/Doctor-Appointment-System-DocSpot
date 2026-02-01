const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    timings: {
      type: Array,
      required: true,
    },
    status: {
      type: String,
      default: "pending", // pending | approved
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("doctors", doctorSchema);
