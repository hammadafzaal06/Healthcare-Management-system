const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const MedicalHistory = require("../models/medicalhistory");
const {
  createMedicalHistory,
  getAllMedicalHistorys,
  getMedicalHistoryById,
  updateMedicalHistoryById,
  deleteMedicalHistoryById,
} = require("../controllers/medicalhistorys");

router.post("/medicalhistorys", createMedicalHistory);

router.get("/medicalhistorys", getAllMedicalHistorys);

router.get("/medicalhistorys/:id", getMedicalHistoryById);

router.patch("/medicalhistorys/:id", updateMedicalHistoryById);

router.delete("/medicalhistorys/:id", deleteMedicalHistoryById);

module.exports = router;
