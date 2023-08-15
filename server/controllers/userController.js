const User = require('../models/userModel')
const mongoose = require('mongoose')

// create user
const createUser = async (req, res) => {
    const { firstName, lastName, password, phoneNumber, email, address, country, postalCode } = req.body

    // add doc to db
    try {
        const user = await User.create({ firstName, lastName, password, phoneNumber, email, address, country, postalCode })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// update password
const updatePassword = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user!'})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!user) {
        return res.status(400).json({error: 'No such user!'})
    }

    res.status(200).json(user)
}


module.exports = {
    createUser,
    updatePassword
}