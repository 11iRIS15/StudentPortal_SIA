const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    subjectId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    subjectCode: {
      type: String,
      required: true,
      trim: true,
    },

    subjectName: {
      type: String,
      required: true,
      trim: true,
    },

    units: {
      type: Number,
      default: 3,
    },

    instructorId: {
      type: String,
      default: "",
    },

    instructor: {
      type: String,
      default: "",
    },

    schedule: {
      type: String,
      default: "",
    },

    time: {
      type: String,
      default: "",
    },

    room: {
      type: String,
      default: "",
    },

    semester: {
      type: String,
      default: "1st Semester",
    },

    academicYear: {
      type: String,
      default: "2026-2027",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Subject", subjectSchema);