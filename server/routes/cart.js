const express = require('express')
const requireAuth = require('../middleware/requireAuth')

// controller functions
const {
    getCart,
    addItem,
    deleteItem,
    deleteCart
} = require('../controller/cartController')

const router = express.Router()

router.use(requireAuth)

// get user's cart
router.get('/get-cart/:userId', getCart)

// add item to cart
router.post('/add-item/:userId/:productId', addItem)

// delete an item from a cart
router.delete('/delete-item/:userId/:productId', deleteItem)

// delete a user's cart
router.delete('/delete-cart/:userId', deleteCart)

module.exports = router