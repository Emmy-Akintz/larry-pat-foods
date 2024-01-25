const Order = require('../models/orderModel');
const User = require('../models/userModel');
const Product = require('../models/productModel');
const Address = require('../models/addressModel');
const Cart = require('../models/cartModel');

const createOrder = async (req, res) => {
    try {
        const { userId, cartId, shippingAddressId } = req.params;

        // Retrieve the cart
        const cart = await Cart.findById(cartId);

        // Check if the cart exists and belongs to the user
        if (!cart || cart.user.toString() !== userId) {
            return res.status(400).send('Invalid cart ID or the cart does not belong to the user');
        }

        // Check if the referenced User, Products, and Shipping Address exist
        const userExists = await User.exists({ _id: userId });
        const productsExist = await Promise.all(cart.items.map(item => Product.exists({ _id: item.product })));
        const addressExists = await Address.exists({ _id: shippingAddressId });

        // If any of them don't exist, send a response with an error message
        if (!userExists || !productsExist.every(Boolean) || !addressExists) {
            return res.status(400).json({ message: 'Referenced User, Product, or Address does not exist' });
        }

        // Create the order using the cart data
        const order = new Order({
            user: userId,
            orderedDate: Date.now(),
            items: cart.items,
            shippingAddress: shippingAddressId,
            orderStatus: 'pending'
        });
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(500).send(error.message);
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
