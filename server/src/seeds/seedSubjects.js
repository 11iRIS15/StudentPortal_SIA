require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Subject = require("../models/Subject");
const subjects = require("../data/subjects");

async function seedSubjects() {
  try {
    await connectDB();

    for (const subject of subjects) {
      await Subject.findOneAndUpdate(
        { subjectId: subject.subjectId },
        subject,
        {
          upsert: true,
          returnDocument: "after",
          runValidators: true,
        }
      );
    }

    console.log("----------------------------------");
    console.log("Subject seed completed successfully!");
    console.log(`${subjects.length} subject record(s) processed.`);
    console.log("----------------------------------");
  } catch (error) {
    console.error("Subject seed failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
  }
}

seedSubjects();