router.post('/orders', orderController.createOrder); // Create a new order
router.get('/orders/:userId', orderController.getUserOrders); // Get all orders for a user
router.get('/orders/:orderId', orderController.getOrder); // Get a single order by ID
router.patch('/orders/:orderId', orderController.updateOrder); // Update an order by ID
router.delete('/orders/:orderId', orderController.deleteOrder); // Delete an order by ID