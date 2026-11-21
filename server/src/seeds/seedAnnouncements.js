require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Announcement = require("../models/Announcement");
const announcements = require("../data/announcements");

async function seedAnnouncements() {
  try {
    await connectDB();

    for (const announcement of announcements) {
      await Announcement.findOneAndUpdate(
        { announcementId: announcement.announcementId },
        announcement,
        {
          upsert: true,
          returnDocument: "after",
          runValidators: true,
        }
      );
    }

    console.log("----------------------------------");
    console.log("Announcements seed completed successfully!");
    console.log(`${announcements.length} announcement record(s) processed.`);
    console.log("----------------------------------");
  } catch (error) {
    console.error("Announcements seed failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
  }
}

seedAnnouncements();