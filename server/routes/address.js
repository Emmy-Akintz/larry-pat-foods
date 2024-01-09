const express = require('express')
const requireAuth = require('../middleware/requireAuth')

// controller functions
const {
    getAddress,
    addAddress,
    updateAddress,
    deleteAddress
} = require('../controller/addressController')

const router = express.Router()

// get user's address
router.get('/get-address/:userId', requireAuth, getAddress)

// add user's address
router.post('/add-address/:userId', requireAuth, addAddress)

// update user's address
router.patch('/update-address/:userId', requireAuth, updateAddress)

// delete user's address
router.delete('/delete-address/:userId', requireAuth, deleteAddress)

module.exports = router