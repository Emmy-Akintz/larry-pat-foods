const Order = require('../models/orderModel');
const mongoose = require('mongoose');
const { findById } = require('../models/userModel');

const createOrder = async (req, res) => {
    try {
        // Extract order data from the request body
        const orderData = req.body;

        // Create a new order instance with the extracted data
        const order = new Order(orderData);

        // Save the new order to the database
        await order.save();

        // Send a success response with the saved order
        res.status(201).json(order);
    } catch (error) {
        // Handle potential errors
        res.status(500).json({ message: 'Error creating order', error: error });
    }
};

const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.params
        const orders = await Order.find({ user: userId }).populate('user items.product shippingAddress')

        if (!orders.length) {
            return res.status(404).json({ message: 'No orders found for this user' })
        }

        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOrder = async (req, res) => {
    try {
        const { orderId } = req.params
        const order = await findById(orderId).populate('user items.product shippingAddress')

        if (!order) {
            return res.status(404).json({ message: 'Order not found' })
        }

        res.json(order)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateOrder = async (req, res) => { }

const deleteOrder = async (req, res) => { }

module.exports = {
    createOrder,
    getUserOrders,
    getOrder,
    updateOrder,
    deleteOrder
};
