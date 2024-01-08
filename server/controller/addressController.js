const Address = require('../models/addressModel')
const mongoose = require('mongoose')

// get user's address
const getAddress = async (req, res) => {
    const { userId } = req.params

    const address = await Address.find({ userId }).sort({ createdAt: -1 })

    res.status(200).json(address)
}

// add user's address
const addAddress = async (req, res) => {
    const { userId } = req.params
    const { street, city, state, country, postal_code } = req.body
}

// update user's address
const updateAddress = async (req, res) => {
    const { userId } = req.params

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({ message: "User doesn't have an address" })
    }

    const address = await Address.findOneAndUpdate({ userId: userId }, {
        ...req.body
    })

    if (!address) {
        return res.status(400).json({ message: "User doesn't have an address" })
    }

    res.status(200).json({ message: 'Address updated successfully!!!', address })
}

// delete user's address
const deleteAddress = async (req, res) => {
    const { userId } = req.params

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({ message: "User doesn't have an address" })
    }

    const address = await Address.findOneAndDelete({ userId: userId })

    if (!address) {
        return res.status(400).json({ message: "User doesn't have an address" })
    }

    res.status(200).json({ message: 'Address deleted successfully', address })
}

module.exports = {
    getAddress,
    updateAddress,
    deleteAddress
}