const mongoose = require('mongoose')
const { Schema } = mongoose

const cartSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
    }],
    active: { type: Boolean, default: true },
    modifiedOn: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema)