require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });

const mongoose = require("mongoose");

async function connectDB() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing. Check your server/.env file.");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("----------------------------------");
    console.log("MongoDB Atlas Connected Successfully");
    console.log("Database:", mongoose.connection.name);
    console.log("----------------------------------");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;