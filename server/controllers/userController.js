const User = require('../models/userModel')
const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')

// create user
const createUser = async (req, res) => {
    const { name, password, phoneNumber, email, address, country, postalCode } = req.body

    // add doc to db
    try {
        const user = await User.create({ name, password, phoneNumber, email, address, country, postalCode })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }


    // user sign up
    // let users = [];
    // const existingUser = users.find(user => user.email === email);
    // if (existingUser) {
    //     return res.status(400).json({ message: 'Username already taken' });
    // }

    // const hashedPassword = await bcrypt.hash(password, 10);
    // const newUser = { id: users.length + 1, firstName, lastName, password: hashedPassword, phoneNumber, email, address, country, postalCode };
    // users.push(newUser);

    // res.json({ message: 'User registered successfully'});
}

// update password
const updatePassword = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user!' })
    }

    const user = await User.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!user) {
        return res.status(400).json({ error: 'No such user!' })
    }

    res.status(200).json(user)
}

module.exports = {
    createUser,
    updatePassword
}