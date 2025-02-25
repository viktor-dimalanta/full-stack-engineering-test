// models/userModel.js
const mongoose = require('mongoose');

// Define the schema for a user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,  // Ensure the username is unique
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure the email is unique
    trim: true,
    lowercase: true,  // Convert email to lowercase
    match: [/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, 'Please fill a valid email address'], // Email validation regex
  },
  password: {
    type: String,
    required: true,
    minlength: 6,  // Minimum password length
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
