const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to the DB ✅");
  } catch (error) {
    console.log("Error to connecting to the DB ❌");
  }
};

module.exports = { connectDB };