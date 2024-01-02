const mongoose = require('mongoose')

const { Schema } = mongoose

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Decimal128,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Product', productSchema)