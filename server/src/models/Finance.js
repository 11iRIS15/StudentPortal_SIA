const mongoose = require("mongoose");

// Fee breakdown schema
const breakdownSchema = new mongoose.Schema(
  {
    feeName: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

// Payment history schema
const paymentSchema = new mongoose.Schema(
  {
    paymentId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: null,
    },
    description: {
      type: String,
      default: "",
    },
    amount: {
      type: Number,
      required: true,
    },
    method: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "Paid",
    },
  },
  { _id: false }
);

// Finance schema
const financeSchema = new mongoose.Schema(
  {
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

    totalAssessment: {
      type: Number,
      default: 0,
    },

    totalPaid: {
      type: Number,
      default: 0,
    },

    balance: {
      type: Number,
      default: 0,
    },

    dueDate: {
      type: Date,
      default: null,
    },

    paymentStatus: {
      type: String,
      default: "Unpaid",
    },

    breakdown: {
      type: [breakdownSchema],
      default: [],
    },

    payments: {
      type: [paymentSchema],
      default: [],
    },
  },
  { timestamps: true }
);

// One finance record per student, academic year, and semester
financeSchema.index(
  { studentId: 1, academicYear: 1, semester: 1 },
  { unique: true }
);

module.exports = mongoose.model("Finance", financeSchema);