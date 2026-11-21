require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Schedule = require("../models/Schedule");
const schedule = require("../data/schedule");

async function seedSchedule() {
  try {
    await connectDB();

    for (const item of schedule) {
      await Schedule.findOneAndUpdate(
        { scheduleId: item.scheduleId },
        item,
        {
          upsert: true,
          returnDocument: "after",
          runValidators: true,
        }
      );
    }

    console.log("----------------------------------");
    console.log("Schedule seed completed successfully!");
    console.log(`${schedule.length} schedule record(s) processed.`);
    console.log("----------------------------------");
  } catch (error) {
    console.error("Schedule seed failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
  }
}

seedSchedule();