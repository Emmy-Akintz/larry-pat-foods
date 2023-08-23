const express = require('express')
const {
    createUser,
    updatePassword
} = require('../controllers/userController')

const router = express.Router()

// create a new user
router.post('/signup', createUser)

// update password
router.patch('/login', updatePassword)

module.exports = router