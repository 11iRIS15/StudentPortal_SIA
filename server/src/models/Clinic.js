const mongoose = require("mongoose");

// Clinic information schema
const clinicInformationSchema = new mongoose.Schema(
  {
    clinicName: {
      type: String,
      default: "IDSC Student Clinic",
    },

    location: {
      type: String,
      default: "School Clinic",
    },

    operatingHours: {
      type: String,
      default: "",
    },

    emergencyContact: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

// Clinic visit schema
const visitSchema = new mongoose.Schema(
  {
    visitId: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      default: null,
    },

    reason: {
      type: String,
      default: "",
    },

    attendingPersonnel: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "Completed",
    },

    notes: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

// Clinic appointment schema
const appointmentSchema = new mongoose.Schema(
  {
    appointmentId: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      default: null,
    },

    time: {
      type: String,
      default: "",
    },

    purpose: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  { _id: false }
);

// Main clinic schema
const clinicSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
      trim: true,
    },

    clinicInformation: {
      type: clinicInformationSchema,
      default: () => ({}),
    },

    visits: {
      type: [visitSchema],
      default: [],
    },

    appointments: {
      type: [appointmentSchema],
      default: [],
    },
  },
  { timestamps: true }
);

// One clinic record per student
clinicSchema.index({ studentId: 1 }, { unique: true });

module.exports = mongoose.model("Clinic", clinicSchema);