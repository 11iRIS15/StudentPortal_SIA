require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Clinic = require("../models/Clinic");
const clinic = require("../data/clinic");

async function seedClinic() {
  try {
    await connectDB();

    await Clinic.findOneAndUpdate(
      { studentId: clinic.studentId },
      clinic,
      {
        upsert: true,
        returnDocument: "after",
        runValidators: true,
      }
    );

    console.log("----------------------------------");
    console.log("Clinic seed completed successfully!");
    console.log("1 clinic record processed.");
    console.log("----------------------------------");
  } catch (error) {
    console.error("Clinic seed failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
  }
}

seedClinic();