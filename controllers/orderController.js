// controllers/orderController.js
const Order = require('../models/orderModel');
const Product = require('../models/productModel');

// Create a new order
const createOrder = async (req, res) => {
  const { userId, productIds } = req.body;

  if (!userId || !productIds || productIds.length === 0) {
    return res.status(400).json({ message: 'User ID and product IDs are required' });
  }

  try {
    // Check if all products exist
    const products = await Product.find({ '_id': { $in: productIds } });
    if (products.length !== productIds.length) {
      return res.status(404).json({ message: 'One or more products not found' });
    }

    // Create order
    const newOrder = new Order({ userId, productIds, status: 'Pending' });
    await newOrder.save();

    // Reduce stock for each product
    for (const product of products) {
      product.stock -= 1;
      await product.save();
    }

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error });
  }
};

// Get all orders for a user
const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve orders', error });
  }
};

// Update order status
const updateOrderStatus = async (req, res) => {
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!updatedOrder) return res.status(404).json({ message: 'Order not found' });

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order status', error });
  }
};

// Get all orders (Admin only)
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve orders', error });
  }
};

module.exports = {
  createOrder,
  getUserOrders,
  updateOrderStatus,
  getAllOrders
};
