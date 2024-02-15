const { response } = require("express");
const MedicalHistory = require("../models/medicalhistory");

const getAllMedicalHistorys = async (req, res, next) => {
  try {
    const docs = await MedicalHistory.find();
    console.log(docs);
    res.status(201).json({
      message: "Here is the Medicalhistory",
      medicalhistory: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getMedicalHistoryById = async (req, res, next) => {
  try {
    const doc = await MedicalHistory.findById(req.params.id);
    console.log(doc);
    res.status(201).json({
      message: "Here is the Medicalhistory",
      medicalhistory: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createMedicalHistory = async (req, res, next) => {
  try {
    const medicalhistory = new MedicalHistory(req.body);
    const doc = await medicalhistory.save();
    console.log(doc);
    res.status(201).json({
      message: "Medicalhistory created",
      medicalhistory: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateMedicalHistoryById = async (req, res, next) => {
  try {
    const result = await MedicalHistory.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    console.log(result);
    res.status(201).json({
      message: "Medicalhistory updated successfully",
      medicalhistory: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteMedicalHistoryById = async (req, res, next) => {
  try {
    const result = await MedicalHistory.findOneAndDelete(req.params.id);
    console.log(result);
    res.status(201).json({
      message: "Medicalhistory deleted",
      medicalhistory: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllMedicalHistorys,
  getMedicalHistoryById,
  createMedicalHistory,
  updateMedicalHistoryById,
  deleteMedicalHistoryById,
};
