// models/cartModel.js
const mongoose = require('mongoose');

// Define the schema for a cart
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,  // The cart must belong to a user
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,  // Each item must reference a product
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,  // Quantity cannot be less than 1
    },
  }],
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create and export the Cart model
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
