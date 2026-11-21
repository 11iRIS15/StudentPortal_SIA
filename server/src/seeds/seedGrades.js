require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Grade = require("../models/Grade");
const grades = require("../data/grades");

async function seedGrades() {
  try {
    await connectDB();

    for (const grade of grades) {
      await Grade.findOneAndUpdate(
        { gradeId: grade.gradeId },
        grade,
        {
          upsert: true,
          returnDocument: "after",
          runValidators: true,
        }
      );
    }

    console.log("----------------------------------");
    console.log("Grade seed completed successfully!");
    console.log(`${grades.length} grade record(s) processed.`);
    console.log("----------------------------------");
  } catch (error) {
    console.error("Grade seed failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
  }
}

seedGrades();