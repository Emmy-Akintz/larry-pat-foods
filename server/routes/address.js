const express = require('express')
const requireAuth = require('../middleware/requireAuth')

// controller functions

const router = express.Router()

router.use(requireAuth)

// get user's address
router.get('/get-address/:userId', () => {})

// update user's address
router.patch('/update-address/:userId', () => {})

// delete user's address
router.delete('/delete-address/:userId', () => {})

module.exports = router