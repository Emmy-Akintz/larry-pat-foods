const express = require('express')
const {
    createUser,
    updatePassword
} = require('../controllers/userController')

const router = express.Router()

// create a new user
router.post('/:id', createUser)

// update password
router.patch('/:id', updatePassword)

module.exports = router