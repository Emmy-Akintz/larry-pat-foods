const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const bodyParser = require('body-parser')

// controller functions
const { getClients, getAdminsManagers, getAdminManager, signupUser, loginUser, deleteUser, forgotPass, resetPass } = require('../controller/userController')

const router = express.Router()

// get clients
router.get('/get-clients', requireAuth, getClients)

// get admins
router.get('/get-admins', requireAuth, getAdminsManagers)

// get admin
router.get('/get-admin/:adminManagerId', requireAuth, getAdminManager)

// login
router.post('/login', loginUser)

// signup
router.post('/signup', signupUser)

// delete user
router.delete('/delete-user/:userId', requireAuth, deleteUser)

// change password... this must involve verification code being sent to email. 
router.use(bodyParser.json())
router.post('/forgot-password', requireAuth, forgotPass)
router.post('/reset-password/:id/:token', requireAuth, resetPass)

module.exports = router