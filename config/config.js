// config.js
require('dotenv').config();  // Loads variables from .env file

const config = {
  // Server Configuration
  SERVER_PORT: process.env.PORT || 5000,  // Default to 5000 if not provided
  
  // MongoDB Configuration
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce',  // Default local DB

  // JWT Configuration
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key',  // Secret key for signing JWT tokens
  JWT_EXPIRE: process.env.JWT_EXPIRE || '1h',  // JWT token expiration time (e.g., 1 hour)

  // Other configuration variables (if needed)
  // Add more configurations like email service, payment gateway API keys, etc.

};

module.exports = config;
