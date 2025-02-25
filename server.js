// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');

// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware
app.use(express.json());  // Parse JSON request bodies
app.use(cors());  // Enable Cross-Origin Resource Sharing (if needed)

// Use the routes
app.use('/api', routes); // Prefix routes with '/api'

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
