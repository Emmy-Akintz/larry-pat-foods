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

    let emptyFields = []

    if (!street) {
        emptyFields.push('street')
    }
    if (!city) {
        emptyFields.push('city')
    }
    if (!state) {
        emptyFields.push('state')
    }
    if (!country) {
        emptyFields.push('country')
    }
    if (!postal_code) {
        emptyFields.push('postal_code')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ message: 'Please fill in all fields', emptyFields })
    }

    // add doc to database
    try {
        let newAddress = new Address({
            userId: userId,
            address: {
                street,
                city,
                state,
                country,
                postal_code
            }
        })

        // await the save operation and send the response afterwards
        let savedAddress = await newAddress.save()
        return res.status(200).json({ message: 'Address created successfully', address: savedAddress })
    } catch (error) {
        res.status(500).json({ message: error.toString() })
    }
}

// update user's address
const updateAddress = async (req, res) => {
    const { userId } = req.params
    const addressUpdate = req.body

    try {
        // update the address document
        const updatedAddress = await Address.findOneAndUpdate(
            { userId: userId }, // find a document by user Id
            { address: addressUpdate }, // update the address field
            { new: true, runValidators: true }, // options: return the updated document and run the schema validators
        )

        if (!updatedAddress) {
            return res.status(404).json({ message: 'Address not found' })
        }

        res.status(200).json({ message: 'Address updated successfully', updatedAddress })
    } catch (error) {
        // handle the potential errors, such as validation errors or cast errors
        res.status(400).json({ message: error.message })
    }
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
    addAddress,
    updateAddress,
    deleteAddress
}