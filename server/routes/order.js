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
router.post('/userId', requireAuth, createOrder); 

// Get all orders for a user
router.get('/:userId', requireAuth, getUserOrders); 

// Get a single order by ID
router.get('/:orderId', requireAuth, getOrder); 

// Update an order by ID
router.patch('/:orderId', requireAuth, updateOrder); 

// Delete an order by ID
router.delete('/:orderId', requireAuth, deleteOrder); 

module.exports = router