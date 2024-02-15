const Appointment = require("../models/appointment");

const getAllAppointments = async (req, res, next) => {
  try {
    const docs = await Appointment.find();
    console.log(docs);
    res.status(201).json({
      message: "Here is the list all the Appointment",
      appointment: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getAppointmentById = async (req, res, next) => {
  try {
    const doc = await Appointment.findById(req.params.id);
    console.log(doc);
    res.status(201).json({
      message: "Here is the Appointment",
      appointment: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createAppointment = async (req, res, next) => {
  try {
    const appointment = new Appointment(req.body);
    const doc = await appointment.save();
    console.log(doc);
    res.status(201).json({
      message: "Appointent is craeted ",
      appointment: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateAppointmentById = async (req, res, next) => {
  try {
    const result = await Appointment.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    console.log(result);
    res.status(201).json({
      message: " appointment Updated",
      appointment: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteAppointmentById = async (req, res, next) => {
  try {
    const result = await Appointment.findOneAndDelete(req.params.id);
    console.log(result);
    res.status(201).json({
      message: "Appointment deleted",
      appointment: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointmentById,
  deleteAppointmentById,
};
