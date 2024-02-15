const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true , default: true},
    date_of_birth: { type: Date, required: true },
    gender: { type: String,required: true },
    address: { type: String, required: true },
    phone_number: { type: String, required: true },
    emergency_contact_name: { type: String, required: true },
    emergency_contact_number: { type: String, required: true }
});


module.exports= mongoose.model('Patient', patientSchema);