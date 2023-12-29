const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const { randomBytes } = require('crypto')

const createToken = (_id) => {
    return jwt.sign(({ _id }), process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({
            email,
            // user,
            token
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// signup user
const signupUser = async (req, res) => {
    const { email, password, firstName, lastName, address, phone } = req.body

    try {
        const user = await User.signup(email, password, firstName, lastName, address, phone)

        // create token
        const token = createToken(user._id)

        res.status(200).json({
            email,
            // user,
            token
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//reset-password
const forgotPass = async (req, res) => {
    const { email } = req.body
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.status(404).send({ Status: "User does not exist" })
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
                subject: 'Reset your password',
                text: `http://localhost:3000/forgotPass/${user._id}/${token}`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    return res.status(200).send({ Status: "Success" })
                }
            });
        })
}

module.exports = { signupUser, loginUser, forgotPass }