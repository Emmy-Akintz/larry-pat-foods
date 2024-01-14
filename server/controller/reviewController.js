const Review = require('../models/reviewModel')
const mongoose = require('mongoose')

const createReview = async (req, res) => { }

const getReviews = async (req, res) => {
    const reviews = await Review.find({}).sort({ createdAt: -1 })

    res.status(200).json(reviews)
}

const getProductReviews = async (req, res) => {
    const { productId } = req.params

    const reviews = await Review.find({ product: productId }).sort({ createdAt: -1 })

    res.status(200).json(reviews)
}

const updateReview = async (req, res) => { }

const deleteReview = async (req, res) => { }

module.exports = {
    createReview,
    getReviews,
    getProductReviews,
    updateReview,
    deleteReview
}