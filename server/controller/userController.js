const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
// const { randomBytes } = require('crypto')
const validator = require('validator')
const bcrypt = require('bcrypt')
// const { log } = require('console')
// const mongoose = require('mongoose')

const createToken = (_id) => {
    return jwt.sign(({ _id }), process.env.SECRET)
}

// get clients
const getClients = async (req, res) => {
    try {
        const clients = await User.find({ role: 'client' })
        res.json(clients)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// get admins
const getAdminsManagers = async (req, res) => {
    try {
        const admins = await User.find({ role: { $in: ['admin', 'manager'] } })
        res.json(admins)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// get admin
const getAdminManager = async (req, res) => {
    try {
        // Extract the ID from the request parameters
        const { adminManagerId } = req.params;

        // Use the findByadminManagerId method to find the user by ID
        const user = await User.findById(adminManagerId);

        // Check if the user exists and has the correct role
        if (user && ['admin', 'manager'].includes(user.role)) {
            res.status(200).json(user);
        } else {
            // If the user does not exist or does not have the correct role, return a  404 error
            res.status(404).json({ message: 'User not found or not an admin/manager' });
        }
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ message: error.message });
    }
}

// update admin or manager
const updateAdminManager = async (req, res) => {
    try {
        // extract Id from request parameters
        const { adminManagerId } = req.params

        const user = await User.findByIdAndUpdate(
            { _id: adminManagerId },
            {
                ...req.body
            },
            { new: true, runValidators: true }
        )

        if (!user) {
            return res.status(400).json({ message: 'User not found' })
        }

        return res.status(200).json(user)
    } catch (error) {
        // handle any potential error during the process
        return res.status(500).json({ message: error.message })
    }
}

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    // validation
    if (!email || !password) {
        return res.status(401).json({ message: 'All fields must be filled' })
    }

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(404).json({ message: 'This user does not exist' })
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        return res.status(401).json({ message: 'Password does not match' })
    }

    const token = createToken(user._id)

    res.status(200).json({ user, token })
}

// signup user
const signupUser = async (req, res) => {
    const { email, password, firstName, lastName, role } = req.body

    // validation
    if (!email || !password || !firstName || !lastName) {
        return res.status(401).json({ message: 'All fields must be filled' })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Invalid Email' })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: 'Password not strong enough. It must include a symbol, Upper case, lower case and a minimum of 8 characters' })
    }

    const emailExists = await User.findOne({ email })

    if (emailExists) {
        return res.status(409).json({ message: 'Email already exists' })
    }

    // hash the password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    let user = new User({
        firstName, lastName, email, password: hash, role,
    })

    user.save()
        .then(doc => res.status(200).json({ message: 'Signup successful', doc }))
        .catch(error => res.status(500).json({ message: error.message }))
}

const deleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const deletedUser = await User.findOneAndDelete({ _id: userId });

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//reset-password
const forgotPass = async (req, res) => {
    const { email } = req.body
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User does not exist' })
            }
            const token = createToken(user._id)
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.MYEMAIL,
                    pass: process.env.MYPASS
                }
            });

            var mailOptions = {
                from: process.env.MYEMAIL,
                to: email,
                subject: 'Reset Your Password',
                text: `http://localhost:5173/reset-password/${user._id}/${token}`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    return res.status(200).json({ message: 'Successfully sent to your mail' })
                }
            });
        })
}

const resetPass = async (req, res) => {
    const { id, token } = req.params
    const { password } = req.body

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            res.json({ message: "Error with token" })
        } else {
            bcrypt.hash(password, 10)
                .then(hash => {
                    User.findByIdAndUpdate({ _id: id }, { password: hash })
                        .then(u => res.status(200).json({ message: 'Password successfully updated' }))
                        .catch(err => res.json({ message: err }))
                })
                .catch(err => res.json({ message: err }))
        }
    })
}

module.exports = { getClients, getAdminsManagers, getAdminManager, signupUser, loginUser, deleteUser, forgotPass, resetPass, updateAdminManager }