const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
  {
    announcementId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      default: "General",
    },

    content: {
      type: String,
      required: true,
    },

    datePosted: {
      type: Date,
      default: Date.now,
    },

    priority: {
      type: String,
      enum: ["Normal", "High", "Low"],
      default: "Normal",
    },

    status: {
      type: String,
      enum: ["Published", "Draft", "Archived"],
      default: "Published",
    },

    audience: {
      type: String,
      default: "All Students",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Announcement", announcementSchema);