const express = require('express')
const requireAuth = require('../middleware/requireAuth')
// const bodyParser = require('body-parser')

// controller functions
const { signupUser, loginUser, forgotPass, resetPass, addItem, clearCart } = require('../controller/userController')
const bodyParser = require('body-parser')

const router = express.Router()

// login
router.post('/login', loginUser)

// signup
router.post('/signup', signupUser)

router.post('/add-item/:userId/:productId', requireAuth, addItem)

router.delete('/clear-cart/:userId', requireAuth, clearCart)

// change password... this must involve verification code being sent to email. 
router.use(bodyParser.json())
router.post('/forgot-password', forgotPass)
router.post('/reset-password/:id/:token', resetPass)

module.exports = router