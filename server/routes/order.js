const express = require('express')
const requireAuth = require('../middleware/requireAuth')

const {
    createOrder,
    getUserOrders,
    getOrder,
    updateOrder,
    deleteOrder
} = require('../controller/orderController')

const router = express.Router()

// Create a new order
router.post('/orders', requireAuth, createOrder); 

// Get all orders for a user
router.get('/orders/:userId', requireAuth, getUserOrders); 

// Get a single order by ID
router.get('/orders/:orderId', requireAuth, getOrder); 

// Update an order by ID
router.patch('/orders/:orderId', requireAuth, updateOrder); 

// Delete an order by ID
router.delete('/orders/:orderId', requireAuth, deleteOrder); 

module.exports = router