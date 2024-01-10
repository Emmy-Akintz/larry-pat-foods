const mongoose = require('mongoose')
const { Schema } = mongoose
const { addressSchema } = require('./addressModel')

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['manager', 'admin', 'client'], default: 'client' },
    registrationDate: { type: Date, default: Date.now },
    addresses: [addressSchema],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)