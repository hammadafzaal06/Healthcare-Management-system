const mongoose = require('mongoose');


const doctorSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    specialization: { type: String, required: true ,default: true},
    experience_years: { type: Number, required: true , default: true},
    hospital: { type: String, required: true }
});


module.exports= mongoose.model('Doctor', doctorSchema);