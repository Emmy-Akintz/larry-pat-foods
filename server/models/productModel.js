const mongoose = require('mongoose')

const { Schema } = mongoose

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: mongoose.Types.Decimal128, required: true },
    stockQuantity: { type: Number, required: true },
    // images: [String], // Array of image URLs
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema)