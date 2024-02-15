const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Appointment = require("../models/appointment");
const {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointmentById,
  deleteAppointmentById,
} = require("../controllers/appointments");

router.post("/appointments", createAppointment);

router.get("/appointments", getAllAppointments);

router.get("/appointments/:id", getAppointmentById);

router.patch("/appointments/:id", updateAppointmentById);

router.delete("/appointments/:id", deleteAppointmentById);

module.exports = router;
