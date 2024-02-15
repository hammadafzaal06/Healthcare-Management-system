const mongoose = require('mongoose');


const prescriptionSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    date_prescribed: { type: Date, required: true },
    medicine_name: { type: String, required: true },
    dosage: { type: String, required: true },
    instructions: { type: String, required: true }
});

module.exports= mongoose.model('Prescription', prescriptionSchema);