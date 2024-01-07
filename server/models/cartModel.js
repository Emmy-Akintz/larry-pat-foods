const mongoose = require('mongoose')

const { Schema } = mongoose

const cartSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    cart: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
        }
    ]
})

module.exports = mongoose.model('Cart', cartSchema)