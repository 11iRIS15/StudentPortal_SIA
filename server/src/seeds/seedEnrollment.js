require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Enrollment = require("../models/Enrollment");
const enrollment = require("../data/enrollment");

async function seedEnrollment() {
  try {
    await connectDB();

    await Enrollment.findOneAndUpdate(
      { enrollmentId: enrollment.enrollmentId },
      enrollment,
      {
        upsert: true,
        returnDocument: "after",
        runValidators: true,
      }
    );

    console.log("----------------------------------");
    console.log("Enrollment seed completed successfully!");
    console.log("1 enrollment record processed.");
    console.log("----------------------------------");
  } catch (error) {
    console.error("Enrollment seed failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
  }
}

seedEnrollment();