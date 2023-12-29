const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
// const validator = require('validator')

const { Schema } = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: [
        {
            street: String,
            city: String,
            state: String,
            country: String,
            postal_code: String
        }
    ],
    phone: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['manager', 'admin', 'client'],
        default: 'client',
    },
    cart: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
            orderDate: {
                type: Date,
                default: Date.now
            },
            orderStatus: {
                type: String,
                enum: ['pending', 'processing', 'shipped', 'delivered'],
                default: 'pending'
            },
        }
    ],
    shippingAddress: {
        type: String
    },
    notes: {
        type: String
    }
}, { timestamps: true })

// // static signup method
// userSchema.statics.signup = async function (email, password, firstName, lastName, phone) {

//     // validation
//     if (!email || !password || !firstName || !lastName || !phone) {
//         throw Error('All fields must be filled!')
//     }
//     if (!validator.isEmail(email)) {
//         throw Error('Email is not valid!')
//     }// password should have uppercase, lowercase, a minimum length of 8 and a symbol
//     if (!validator.isStrongPassword(password)) {
//         throw Error('Password not strong enough!')
//     }
//     // if (!validator.isMobilePhone(phone)) {
//     //     throw Error('Phone number is not valid!')
//     // }

//     const emailExists = await this.findOne({ email })

//     if (emailExists) {
//         throw Error('Email already in use!')
//     }

//     const phoneExists = await this.findOne({ phone })

//     if (phoneExists) {
//         throw Error('Phone number already in use!')
//     }

//     const phoneLength = phone.length

//     const isPhoneLength = phoneLength === 11

//     if (!isPhoneLength) {
//         throw Error('Phone number is not valid!')
//     }

//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(password, salt)

//     return user = await this.create({ email, password: hash, firstName, lastName, phone })
// }

// //statics login method
// userSchema.statics.login = async function (email, password) {
//     // validation
//     if (!email || !password) {
//         throw new Error('All fields must be filled')
//     }

//     const user = await this.findOne({ email })

//     if (!user) {
//         throw  new Error('Email does not exist')
//     }

//     const match = await bcrypt.compare(password, user.password)

//     if (!match) {
//         throw new Error('Incorrect password')
//     }

//     return user
// }

module.exports = mongoose.model('User', userSchema)