const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Patient = require("../models/patient");
const {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatientById,
  deletePatientById,
} = require("../controllers/patients");

router.post("/patients", createPatient);

router.get("/patients", getAllPatients);

router.get("/patients/:id", getPatientById);

router.patch("/patients/:id", updatePatientById);

router.delete("/patients/:id", deletePatientById);

module.exports = router;
