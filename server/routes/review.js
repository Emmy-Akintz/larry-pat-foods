const express = require('express')
const requireAuth = require('../middleware/requireAuth')

const {
    createReview,
    getReviews,
    getProductReviews,
    updateReview,
    deleteReview
} = require('../controller/reviewController')

const router = express.Router()

// Create a new review
router.post('/:userId/:productId', requireAuth, createReview); 

// Get all reviews
router.get('/', getReviews); 

// Get all reviews for a product
router.get('/:productId', getProductReviews); 

// Update a review by ID
router.patch('/:reviewId', requireAuth, updateReview); 

// Delete a review by ID
router.delete('/:reviewId', requireAuth, deleteReview); 

module.exports = router