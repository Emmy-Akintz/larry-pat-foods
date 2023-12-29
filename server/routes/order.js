const express = require('express')
const requireAuth = require('../middleware/requireAuth')

// controller functions
const {
    getOrders,
    createOrder,
    deleteOrder,
    updateOrder
} = require('../controller/orderController')

const router = express.Router()
router.use(requireAuth)

// get a person's order
router.get('/order', getOrders)

// create an order
router.post('/order', createOrder)

// delete an order
router.delete('/order/:orderID', deleteOrder)

// update an order
router.patch('/order/:orderID', updateOrder)

module.exports = router