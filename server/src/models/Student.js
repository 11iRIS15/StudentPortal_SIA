const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    middleName: {
      type: String,
      default: "",
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      default: "",
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      default: "",
      trim: true,
    },

    course: {
      type: String,
      default: "Bachelor of Science in Information Technology",
    },

    courseCode: {
      type: String,
      default: "BSIT",
    },

    yearLevel: {
      type: String,
      default: "3rd Year",
    },

    section: {
      type: String,
      default: "JAVA",
    },

    academicYear: {
      type: String,
      default: "2026-2027",
    },

    semester: {
      type: String,
      default: "1st Semester",
    },

    status: {
      type: String,
      enum: ["Regular", "Irregular", "Active", "Inactive", "Graduated", "Dropped"],
      default: "Regular",
    },

    address: {
      type: String,
      default: "",
    },

    birthDate: {
      type: Date,
      default: null,
    },

    gender: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);