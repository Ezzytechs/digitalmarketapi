const mongoose = require("mongoose");
require("dotenv").config();
// const { MONGO_URI } = require("./env");
const MONGO_URI = process.env.MONGO_URI;
const MAX_RETRIES = 5;
let retries = 0;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    retries += 1;
    console.error(`MongoDB connection failed (${retries})`, err.message);

    if (retries < MAX_RETRIES) {
      setTimeout(connectDB, 5000);
    } else {
      console.error("Max DB retries reached. Exiting...");
      process.exit(1);
    }
  }
};

module.exports = connectDB;

// const mongoose = require("mongoose");

// // console.log({connect:process.env.MONGO_URI})
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error('MongoDB connection error:', error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
