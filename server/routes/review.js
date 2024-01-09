router.post('/reviews', reviewController.createReview); // Create a new review
router.get('/reviews/:productId', reviewController.getProductReviews); // Get all reviews for a product
router.patch('/reviews/:reviewId', reviewController.updateReview); // Update a review by ID
router.delete('/reviews/:reviewId', reviewController.deleteReview); // Delete a review by ID