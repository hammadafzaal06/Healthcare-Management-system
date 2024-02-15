const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, default: true },
    role: { type: String, enum: ['patient', 'doctor', 'admin'], required: true }
});

module.exports = mongoose.model('User', userSchema);

