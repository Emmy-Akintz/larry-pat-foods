const Order = require('../models/Order'); // Assuming you have an Order model defined as per the previous example

// createOrder controller function
const createOrder = async (req, res) => {
    try {
        const { userId, products, status } = req.body;

        // Create a new order with the request body data
        const newOrder = new Order({
            userId,
            products,
            status
        });

        // Save the order to the database
        await newOrder.save();

        // Send a response with the created order
        res.status(201).json({
            message: 'Order created successfully',
            order: newOrder
        });
    } catch (error) {
        // Handle possible errors
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};

module.exports = {
    createOrder
};
