const Order = require('../models/orderModel')
const mongoose = require('mongoose')

// get a person's order
const getOrders = async (req, res) => {
    const user_id = req.user._id

    const orders = await Order.find({ userID: user_id }).sort({ createdAt: -1 })

    if (orders.length == 0) {
        return res.status(404).json({ error: "You currently don't have any order" })
    }

    res.status(200).json(orders)
}

// create an order
const createOrder = async (req, res) => {
    const user_id = req.user._id

    const { items, shippingAddress, notes } = req.body
    // const userOrderCount = await Order.countDocuments({ userID: user_id })

    let emptyFields = []

    if (!items) {
        emptyFields.push('products')
    }
    if (!shippingAddress) {
        emptyFields.push('shippingAddress')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    // add document to database
    try {
        const order = await Order.create({ userID: user_id, items, shippingAddress, notes })
        res.status(200).json(order)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete an order
const deleteOrder = async (req, res) => {
    const user_id = req.user._id

    const { orderID } = req.params

    if (!mongoose.Types.ObjectId.isValid(orderID)) {
        return res.status(400).json({ error: 'No such order' })
    }

    const order = await Order.findOneAndDelete({ _id: orderID, userID: user_id })

    if (!order) {
        return res.status(400).json({ error: 'No such order' })
    }

    res.status(200).json({ order })
}

// update an order
const updateOrder = async (req, res) => {
    const user_id = req.user._id
    
    const { orderID } = req.params

    if (!mongoose.Types.ObjectId.isValid(orderID)) {
        return res.status(404).json({ error: 'No such order' })
    }

    const order = await Order.findOneAndUpdate({ _id: orderID, userID: user_id }, {
        ...req.body
    })

    if (!order) {
        return res.status(400).json({ error: 'No such order' })
    }

    res.status(200).json(order)
}

module.exports = {
    getOrders,
    createOrder,
    deleteOrder,
    updateOrder
}