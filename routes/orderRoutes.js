// routes/orderRoutes.js
const express = require('express');
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Create a new order
router.post('/', authMiddleware.verifyToken, orderController.createOrder);

// Get all orders for a user
router.get('/user/:userId', authMiddleware.verifyToken, orderController.getUserOrders);

// Update order status (admin only)
router.put('/:id', authMiddleware.verifyToken, orderController.updateOrderStatus);

// Get all orders (admin only)
router.get('/', authMiddleware.verifyToken, orderController.getAllOrders);

module.exports = router;
