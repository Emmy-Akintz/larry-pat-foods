const express = require('express')
// const bodyParser = require('body-parser')

// controller functions
const { signupUser, loginUser, forgotPass } = require('../controller/userController')
const bodyParser = require('body-parser')

const router = express.Router()

// login
router.post('/login', loginUser)

// signup
router.post('/signup', signupUser)

// change password... this must involve verification code being sent to email. 
router.use(bodyParser.json())
router.post('/reset-password', forgotPass)

module.exports = router