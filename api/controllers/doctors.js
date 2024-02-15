const Doctor = require("../models/doctor");

const getAllDoctors = async (req, res, next) => {
  try {
    const docs = await Doctor.find();
    console.log(docs);
    res.status(201).json({
      message: "Here is the list of All doctors",
      doctor: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getDoctorById = async (req, res, next) => {
  try {
    const doc = await Doctor.findById(req.params.id);
    console.log(doc);
    res.status(201).json({
      message: "Here is the Doctor",
      doctor: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createDoctor = async (req, res, next) => {
  try {
    const doctor = new Doctor(req.body);
    const doc = await doctor.save();
    console.log(doc);
    res.status(201).json({
      message: "Doctor created successfully",
      doctor: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateDoctorById = async (req, res, next) => {
  try {
    const result = await Doctor.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    console.log(result);
    res.status(201).json({
      message: "Doctor updated successfully",
      doctor: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteDoctorById = async (req, res, next) => {
  try {
    const result = await Doctor.findByIdAndUpdate(req.params.id);
    console.log(result);
    res.status(201).json({
      message: "doctor Deleted successfully",
      doctor: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctorById,
  deleteDoctorById,
};
