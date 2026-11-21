const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema(
  {
    gradeId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    studentId: {
      type: String,
      required: true,
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

    prelim: {
      type: Number,
      default: null,
    },

    midterm: {
      type: Number,
      default: null,
    },

    final: {
      type: Number,
      default: null,
    },

    finalGrade: {
      type: Number,
      default: null,
    },

    remarks: {
      type: String,
      default: "In Progress",
    },

    units: {
      type: Number,
      default: 3,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Grade", gradeSchema);