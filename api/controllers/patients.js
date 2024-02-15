const Patient = require("../models/patient");

const getAllPatients = async (req, res, next) => {
  try {
    const docs = await Patient.find();
    console.log(docs);
    res.status(201).json({
      message: "Here is the list of all the patients",
      patient: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getPatientById = async (req, res, next) => {
  try {
    const doc = await Patient.findById(req.params.id);
    console.log(doc);
    res.status(201).json({
      message: "Here is the Patient",
      patient: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createPatient = async (req, res, next) => {
  try {
    const patient = new Patient(req.body);
    const doc = await patient.save();
    console.log(doc);
    res.status(201).json({
      message: "Patient is created successfully",
      patient: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updatePatientById = async (req, res, next) => {
  try {
    const result = await Patient.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    console.log(result);
    res.status(201).json({
      message: "Patient Updated successflly",
      patient: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deletePatientById = async (req, res, next) => {
  try {
    const result = await Patient.findOneAndDelete(req.params.id);
    console.log(result);
    res.status(201).json({
      message: "Patient Deleted successfully",
      patient: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatientById,
  deletePatientById,
};
