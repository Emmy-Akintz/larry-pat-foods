const Cart = require('../models/cartModel')

// get user's cart
const getCart = async (req, res) => {
    const { userId } = req.params

    const cart = await Cart.find({ user: userId }).sort({ createdAt: -1 })

    res.status(200).json(cart)
}

// add item to cart
const addItem = async (req, res) => {
    const { userId, productId } = req.params;
    const { quantity } = req.body; // Assume quantity is passed in the request body

    try {
        let cart = await Cart.findOne({ userId: userId });

        if (!cart) {
            // No cart for the user, create a new cart with the product
            let newCart = new Cart({
                user: userId,
                cart: [{ productId: productId, quantity: quantity }]
            });

            let savedCart = await newCart.save();
            return res.status(200).json({ message: 'Cart created successfully', cart: savedCart });
        }

        // Cart exists for the user, check if the product is already in the cart
        let productExists = cart.cart.find(item => item.productId.toString() === productId);

        if (productExists) {
            // Product exists, update the quantity
            productExists.quantity += quantity;
        } else {
            // Product does not exist, add new product with quantity
            cart.cart.push({ productId: productId, quantity: quantity });
        }

        let savedCart = await cart.save();
        res.status(200).json({ message: 'Product added to cart', cart: savedCart });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.toString() });
    }
};


// delete an item from a cart
const deleteItem = async (req, res) => {
    const { userId, productId } = req.params;

    try {
        const cart = await Cart.findOne({ userId: userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Find the index of the item to remove
        const itemIndex = cart.cart.findIndex(item => item.productId.equals(productId));

        if (itemIndex > -1) {
            // Remove item at the specified index
            cart.cart.splice(itemIndex, 1);
            await cart.save(); // Save the document with the item removed
            res.json({ message: 'Item removed from cart', cart });
        } else {
            res.status(404).json({ message: 'Product not found in cart' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error in deleting item from cart' });
    }
};

// delete a user's cart
const deleteCart = async (req, res) => {
    const { userId } = req.params;

    try {
        const result = await Cart.findOneAndDelete({ userId: userId });

        if (!result) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        res.status(200).json({ message: 'Cart deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.toString() });
    }
};

module.exports = { getCart, addItem, deleteItem, deleteCart }