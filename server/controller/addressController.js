const Address = require('../models/addressModel')
const mongoose = require('mongoose')

// get user's address
const getAddress = async (req, res) => {
    const { userId } = req.params

    const address = await Address.find({ userId }).sort({ createdAt: -1 })

    res.status(200).json(address)
}

// update user's address
const updateAddress = async (req, res) => {
    const { userId } = req.params
}