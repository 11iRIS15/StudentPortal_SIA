const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    enrollmentId: {
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

    academicYear: {
      type: String,
      required: true,
    },

    semester: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Enrolled",
    },

    enrollmentDate: {
      type: Date,
      default: null,
    },

    totalUnits: {
      type: Number,
      default: 0,
    },

    subjects: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enrollment", enrollmentSchema);