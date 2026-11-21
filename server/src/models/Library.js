const mongoose = require("mongoose");

// Borrowed book schema
const bookSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      required: true,
    },

    bookId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      default: "",
    },

    borrowDate: {
      type: Date,
      default: null,
    },

    dueDate: {
      type: Date,
      default: null,
    },

    status: {
      type: String,
      default: "Borrowed",
    },

    fine: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

// Book reservation schema
const reservationSchema = new mongoose.Schema(
  {
    reservationId: {
      type: String,
      required: true,
    },

    bookId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    reservationDate: {
      type: Date,
      default: null,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  { _id: false }
);

// Library schema
const librarySchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
      trim: true,
    },

    borrowedCount: {
      type: Number,
      default: 0,
    },

    overdueCount: {
      type: Number,
      default: 0,
    },

    reservedCount: {
      type: Number,
      default: 0,
    },

    books: {
      type: [bookSchema],
      default: [],
    },

    reservations: {
      type: [reservationSchema],
      default: [],
    },
  },
  { timestamps: true }
);

// One library record per student
librarySchema.index({ studentId: 1 }, { unique: true });

module.exports = mongoose.model("Library", librarySchema);