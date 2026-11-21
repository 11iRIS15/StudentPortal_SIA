require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Library = require("../models/Library");
const library = require("../data/library");

async function seedLibrary() {
  try {
    await connectDB();

    await Library.findOneAndUpdate(
      { studentId: library.studentId },
      library,
      {
        upsert: true,
        returnDocument: "after",
        runValidators: true,
      }
    );

    console.log("----------------------------------");
    console.log("Library seed completed successfully!");
    console.log("1 library record processed.");
    console.log("----------------------------------");
  } catch (error) {
    console.error("Library seed failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
  }
}

seedLibrary();