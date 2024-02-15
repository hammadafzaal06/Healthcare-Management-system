const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Prescription = require("../models/prescription");
const {
  createPrescription,
  getAllPrescriptions,
  getPrescriptionById,
  updatePrescriptionById,
  deletePrescriptionById,
} = require("../controllers/prescriptions");

router.post("/prescriptions", createPrescription);

router.get("/prescriptions", getAllPrescriptions);

router.get("/prescriptions/:id", getPrescriptionById);

router.patch("/prescriptions/:id", updatePrescriptionById);

router.delete("/prescriptions/:id", deletePrescriptionById);

module.exports = router;
