const mongoose = require('mongoose')
const { Schema } = mongoose

const addressSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
    fullName: { type: String, required: true },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    stateProvince: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Address', addressSchema)