const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Doctor = require("../models/doctor");
const {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctorById,
  deleteDoctorById,
} = require("../controllers/doctors");

router.post("/doctors", createDoctor);

router.get("/doctors", getAllDoctors);

router.get("/doctors/:id", getDoctorById);

router.patch("/doctors/:id", updateDoctorById);

router.delete("/doctors/:id", deleteDoctorById);

module.exports = router;
