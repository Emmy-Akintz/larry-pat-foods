const express = require('express')
const requireAuth = require('../middleware/requireAuth')

// controller functions

const router = express.Router()

router.use(requireAuth)

// get user's cart
router.get('/get-item/:userId', () => {})

// add item to cart
router.post('/add-item/:userId/:productId', () => {})

// delete an item from a cart
router.delete('/delete-item/:userId/:cartId', () => {})

// delete a user's cart
router.delete('/delete-cart/:userId', () => {})