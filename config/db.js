// db.js
const mongoose = require('mongoose');
const config = require('./config');

// Connect to MongoDB database
const connectDB = async () => {
  try {
    // Connect to the MongoDB URI provided in the config
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // Ensures the use of MongoDB's automatic index creation
      useFindAndModify: false, // Avoid deprecation warning for findAndModify()
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);  // Exit the process with failure code
  }
};

module.exports = connectDB;
