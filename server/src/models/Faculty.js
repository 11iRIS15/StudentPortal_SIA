const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema(
  {
    facultyId: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    position: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    subjects: {
      type: [String],
      default: [],
    },

    consultationSchedule: {
      type: String,
      default: "",
    },

    office: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Faculty", facultySchema);