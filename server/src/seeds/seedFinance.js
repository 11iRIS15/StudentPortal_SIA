require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Finance = require("../models/Finance");
const finance = require("../data/finance");

async function seedFinance() {
  try {
    await connectDB();

    await Finance.findOneAndUpdate(
      {
        studentId: finance.studentId,
        academicYear: finance.academicYear,
        semester: finance.semester,
      },
      finance,
      {
        upsert: true,
        returnDocument: "after",
        runValidators: true,
      }
    );

    console.log("----------------------------------");
    console.log("Finance seed completed successfully!");
    console.log("1 finance record processed.");
    console.log("----------------------------------");
  } catch (error) {
    console.error("Finance seed failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
  }
}

seedFinance();