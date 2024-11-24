const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Ritik2627:Patel2004@ritik.rf870vr.mongodb.net/?retryWrites=true&w=majority&appName=Ritik'
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
