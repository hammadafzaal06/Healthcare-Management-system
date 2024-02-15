const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    appointment_date: { type: Date, required: true },
    reason: { type: String, required: true },
    is_confirmed: { type: Boolean, default: false }
});


module.exports= mongoose.model('Appointment', appointmentSchema);