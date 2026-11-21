require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Student = require("../models/Student");
const students = require("../data/student.data");

async function seedStudents() {
  try {
    await connectDB();

    for (const student of students) {
      await Student.findOneAndUpdate(
        { studentId: student.studentId },
        student,
        {
          upsert: true,
          new: true,
          runValidators: true,
        }
      );
    }

    console.log("----------------------------------");
    console.log("Student seed completed successfully!");
    console.log(`${students.length} student record(s) processed.`);
    console.log("----------------------------------");
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
  }
}

seedStudents();