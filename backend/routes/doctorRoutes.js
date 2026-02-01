const express = require("express");
const {
  applyDoctor,
  approveDoctor,
  getAllApprovedDoctors,
  getPendingDoctors,
} = require("../controllers/doctorController");

const router = express.Router();

router.post("/apply", applyDoctor);
router.post("/approve-doctor", approveDoctor);

// ADMIN
router.get("/get-pending", getPendingDoctors);

// USERS
router.get("/get-all-approved", getAllApprovedDoctors);

module.exports = router;
