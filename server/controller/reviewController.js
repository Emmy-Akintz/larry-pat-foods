const Review = require('../models/reviewModel')
const mongoose = require('mongoose')

const createReview = async (req, res) => {
    try {
        const { userId, productId } = req.params
        const { rating, comment } = req.body

        const newReview = new Review({
            user: userId,
            product: productId,
            rating,
            comment
        })

        await newReview.save()

        res.status(201).json(newReview)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getReviews = async (req, res) => {
    const reviews = await Review.find({}).sort({ createdAt: -1 })

    res.status(200).json(reviews)
}

const getProductReviews = async (req, res) => {
    const { productId } = req.params

    const reviews = await Review.find({ product: productId }).sort({ createdAt: -1 })

    res.status(200).json(reviews)
}

const updateReview = async (req, res) => {
    const { reviewId } = req.params
    const updatedFields = req.body

    try {
        const updatedReview = await Review.findByIdAndUpdate(
            reviewId,
            { $set: updatedFields },
            { new: true, runValidators: true }
        )

        if (!updatedReview) {
            return res.status(404).json({ message: 'Review not found' })
        }

        res.status(200).json(updatedReview)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteReview = async (req, res) => {
    const { reviewId } = req.params

    try {
         const deletedReview = await Review.findByIdAndDelete(reviewId)

         if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' })
         }

         res.status(200).json({ message: 'Review successfully deleted', deletedReview })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    createReview,
    getReviews,
    getProductReviews,
    updateReview,
    deleteReview
}