const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered'],
        default: 'pending'
    },
    // billingAddress: billing will be payment on delivery for the time being
    shippingAddress: {
        type: String,
        required: true
    },
    // paymentMethod: since it is payment on delivery, it won't be active for now
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: mongoose.Decimal128,
                required: true
            },
            subTotal: {
                type: mongoose.Decimal128,
                required: true
            }
        }
    ],
    // total: {
    //     orderTotal: {
    //         type: Number,
    //         required: true
    //     },
    //     tax: {
    //         type: mongoose.Decimal128,
    //         default: "0"
    //     },
    //     shippingCost: {
    //         type: mongoose.Decimal128,
    //         default: "0"
    //     }
    // },
    discounts: {
        type: mongoose.Decimal128,
        default: "0"
    },
    notes: {
        type: String
    },
    // trackingInfo: still inactive for now
})

// pre-save middleware to calculate orderTotal before saving
// orderSchema.pre('save', async function (next) {
//     try {
//         const userOrderCount = await this.model('Order').countDocuments({ user: this.user })
//         this.total.orderTotal = userOrderCount
//         next()
//     } catch (error) {
//         next(error)
//     }
// })

module.exports = mongoose.model('Order', orderSchema)