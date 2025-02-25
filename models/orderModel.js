// models/orderModel.js
const mongoose = require('mongoose');

// Define the schema for an order
const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,  // The order must belong to a user
  },
  productIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,  // The order must contain products
  }],
  status: {
    type: String,
    enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],  // Status options
    default: 'Pending',  // Default status is 'Pending'
  },
  totalAmount: {
    type: Number,
    required: true,  // The total amount for the order
    min: 0,  // Amount cannot be negative
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create and export the Order model
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
