const Order = require('../models/orderModel');
const { findById } = require('../models/userModel');

const createOrder = async (req, res) => {
    try {
        const { userId } = req.params
        // Extract order data from the request body
        const orderData = req.body;

        // Create a new order instance with the extracted data
        const order = new Order(user = userId, orderData);

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

const updateOrder = async (req, res) => {
    const { orderId } = req.params; // or however you're passing the order ID
    const updateData = req.body; // the update fields

    try {
        // You can use dot notation to update nested fields
        const dotNotationUpdateData = convertToDotNotation(updateData);

        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { $set: dotNotationUpdateData },
            { new: true, runValidators: true } // options to return the new document and run schema validators
        );

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order', error: error.message });
    }
}

// Helper function to convert nested objects to dot notation
function convertToDotNotation(obj, newObj = {}, prefix = "") {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
                convertToDotNotation(obj[key], newObj, prefix + key + ".");
            } else {
                newObj[prefix + key] = obj[key];
            }
        }
    }
    return newObj;
}

const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params; // Or however you get the order ID from the request
        const result = await Order.deleteOne({ _id: orderId });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error: error.message });
    }
};

module.exports = {
    createOrder,
    getUserOrders,
    getOrder,
    updateOrder,
    deleteOrder
};
