const mongoose = require('mongoose')

const { Schema } = mongoose

const addressSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        postal_code: String,
    },
})

module.exports = mongoose.model('Address', addressSchema)