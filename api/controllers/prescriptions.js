const Prescription = require("../models/prescription");

const getAllPrescriptions = async (req, res, next) => {
  try {
    const docs = await Prescription.find();
    console.log(docs);
    res.status(201).json({
      message: "Here is the list of all the Prescriptions",
      prescription: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getPrescriptionById = async (req, res, next) => {
  try {
    const doc = await Prescription.findById(req.params.id);
    console.log(doc);
    res.status(201).json({
      message: " Here is the prescription",
      prescription: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createPrescription = async (req, res, next) => {
  try {
    const prescription = new Prescription(req.body);
    const doc = await prescription.save();
    console.log(doc);
    res.status(201).json({
      message: "prescription created successfully",
      prescription: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updatePrescriptionById = async (req, res, next) => {
  try {
    const result = await Prescription.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    console.log(result);
    res.status(201).json({
      message: "prescription Updated successfully",
      prescription: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deletePrescriptionById = async (req, res, next) => {
  try {
    const result = await Prescription.findByIdAndDelete(req.params.id);
    console.log(result);
    res.status(201).json({
      message: "prescription deleted SuccessFully",
      prescription: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllPrescriptions,
  getPrescriptionById,
  createPrescription,
  updatePrescriptionById,
  deletePrescriptionById,
};
