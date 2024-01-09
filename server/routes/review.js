const express = require('express')
const requireAuth = require('../middleware/requireAuth')

const {
    createReview,
    getProductReviews,
    updateReview,
    deleteReview
} = require('../controller/reviewController')

// Create a new review
router.post('/reviews', requireAuth, createReview); 

// Get all reviews for a product
router.get('/reviews/:productId', getProductReviews); 

// Update a review by ID
router.patch('/reviews/:reviewId', requireAuth, updateReview); 

// Delete a review by ID
router.delete('/reviews/:reviewId', requireAuth, deleteReview); 