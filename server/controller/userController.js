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
const getAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: 'admin' })
        res.json(admins)
    } catch (error) {
        res.status(500).json({ message: error.message })
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
    const { email, password, firstName, lastName } = req.body

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
        firstName, lastName, email, password: hash,
    })

    user.save()
        .then(doc => res.status(200).json({ message: 'Signup successful', doc }))
        .catch(error => res.json({ message: error }))
}

const deleteUser = async (req, res) => {
    const { userId } = req.params

    User.findOneAndDelete({ userId })
        .then(user => {
            return res.status(200).json({ message: 'User deleted successfully', user })
        })
        .catch(error => {
            return res.json({ message: error.message })
        })
}

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

module.exports = { getClients, getAdmins, signupUser, loginUser, deleteUser, forgotPass, resetPass }