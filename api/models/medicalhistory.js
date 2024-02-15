const mongoose = require('mongoose');


const medicalHistorySchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    date_of_visit: { type: Date, required: true },
    diagnosis: { type: String, required: true },
    symptoms: { type: String, required: true },
    treatment: { type: String, required: true }
});


module.exports= mongoose.model('MedicalHistory', medicalHistorySchema)