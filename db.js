
const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/school`, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    mongoose.connection.once('open', () => {
      console.log('Successfully connected to MongoDB');
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
