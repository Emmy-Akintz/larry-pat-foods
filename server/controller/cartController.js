const Cart = require('../models/cartModel')

// get user's cart
const getCart = async (req, res) => {
    const { userId } = req.params

    const cart = await Cart.find({ user: userId }).sort({ createdAt: -1 })

    res.status(200).json(cart)
}

// add item to cart
const addItem = async (req, res) => {
    const { userId } = req.params; // assuming the userId is passed as a URL parameter
    const { productId, quantity, price } = req.body; // assuming these are passed in the request body

    try {
        // Retrieve the cart for the user or create it if it doesn't exist
        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            cart = new Cart({ user: userId, items: [] });
        }

        // Check if the item already exists in the cart
        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

        if (itemIndex > -1) {
            // If the item exists, update the quantity
            cart.items[itemIndex].quantity += quantity;
        } else {
            // If the item doesn't exist, add it to the cart
            cart.items.push({ product: productId, quantity, price });
        }

        // Save the cart
        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error adding item to cart', error: error });
    }
};

// delete an item from a cart
const deleteItem = async (req, res) => {
    const { userId, productId } = req.params; // Assuming the user ID and product ID are passed in the URL

    try {
        // Find the cart by the user ID
        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        // Find the item index using the product ID
        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

        if (itemIndex > -1) {
            // If the item exists, check the quantity
            if (cart.items[itemIndex].quantity > 1) {
                // Decrement the quantity by 1
                cart.items[itemIndex].quantity -= 1;
            } else {
                // Remove the item from the cart
                cart.items.splice(itemIndex, 1);
            }

            // Save the updated cart
            await cart.save();
            res.status(200).json(cart);
        } else {
            res.status(404).json({ message: 'Item not found in cart' });
        }
    } catch (error) {
        // If an error occurs, send a server error response
        res.status(500).json({ message: 'Error updating cart', error: error });
    }
};

module.exports = { getCart, addItem, deleteItem }