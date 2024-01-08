const express = require('express')
const requireAuth = require('../middleware/requireAuth')

// controller functions
const {
    getAddress,
    updateAddress,
    deleteAddress
} = require('../controller/addressController')

const router = express.Router()

router.use(requireAuth)

// get user's address
router.get('/get-address/:userId', getAddress)

// add user's address
router.post('/add-address/:userId', () => {})

// update user's address
router.patch('/update-address/:userId', updateAddress)

// delete user's address
router.delete('/delete-address/:userId', deleteAddress)

module.exports = router