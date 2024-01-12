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

    const addressCheck = Address.findOne(userId)

    if (addressCheck) {
        return res.status(409).json({ message: 'Address already exists.' })
    }

    try {
        // Create a new address instance with data from request body
        const address = new Address({
            user: req.user._id, // assuming you have the user id stored in req.user
            fullName: req.body.fullName,
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            stateProvince: req.body.stateProvince,
            zipCode: req.body.zipCode,
            country: req.body.country,
            phone: req.body.phone
        });

        // Save the new address to the database
        await address.save();

        // Send a success response with the new address
        res.status(201).json(address);
    } catch (error) {
        // If an error occurs, send an error response
        res.status(400).json({ error: error.message });
    }
};

// update user's address
const updateAddress = async (req, res) => {
    const { userId } = req.params; // Assuming the user ID is passed in the URL
    const updateData = {
        fullName: req.body.fullName,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        stateProvince: req.body.stateProvince,
        zipCode: req.body.zipCode,
        country: req.body.country,
        phone: req.body.phone
    };

    try {
        // Find the address by user ID and update it
        const updatedAddress = await Address.findOneAndUpdate(
            { user: userId }, // Find an address that belongs to the user
            updateData, // Apply the updates from the request body
            { new: true, runValidators: true } // Return the updated document and run validators
        );

        if (updatedAddress) {
            res.status(200).json(updatedAddress);
        } else {
            res.status(404).json({ message: 'Address not found for this user' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating address', error: error });
    }
};


// delete user's address
const deleteAddress = async (req, res) => {
    const { userId } = req.params; // Assuming the user ID is passed in the URL

    try {
        // Find the address by user ID and delete it
        const deletedAddress = await Address.findOneAndDelete({ user: userId });

        if (deletedAddress) {
            res.status(200).json({ message: 'Address successfully deleted' });
        } else {
            res.status(404).json({ message: 'No address found for this user' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting address', error: error });
    }
};

module.exports = {
    getAddress,
    addAddress,
    updateAddress,
    deleteAddress
}