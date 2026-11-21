
const Student = require("../models/Student");
const Subject = require("../models/Subject");
const Grade = require("../models/Grade");
const Schedule = require("../models/Schedule");
const Enrollment = require("../models/Enrollment");
const Finance = require("../models/Finance");
const Announcement = require("../models/Announcement");
const Faculty = require("../models/Faculty");
const Library = require("../models/Library");
const Clinic = require("../models/Clinic");

// ==========================================
// STUDENT
// ==========================================

async function getStudentFromDB(studentId) {
  return await Student.findOne({ studentId }).lean();
}

// ==========================================
// SUBJECTS
// ==========================================

async function getSubjectsFromDB() {
  return await Subject.find().sort({ subjectCode: 1 }).lean();
}

// ==========================================
// GRADES
// ==========================================

async function getGradesFromDB(studentId) {
  return await Grade.find({ studentId })
    .sort({ subjectCode: 1 })
    .lean();
}

// ==========================================
// SCHEDULE
// ==========================================

async function getScheduleFromDB(studentId) {
  return await Schedule.find({ studentId })
    .sort({ day: 1, startTime: 1 })
    .lean();
}

// ==========================================
// ENROLLMENT
// ==========================================

async function getEnrollmentFromDB(studentId) {
  return await Enrollment.findOne({ studentId }).lean();
}

// ==========================================
// FINANCE
// ==========================================

async function getFinanceFromDB(studentId) {
  return await Finance.findOne({ studentId }).lean();
}

// ==========================================
// LIBRARY
// ==========================================

async function getLibraryFromDB(studentId) {
  return await Library.findOne({ studentId }).lean();
}

// ==========================================
// CLINIC
// ==========================================

async function getClinicFromDB(studentId) {
  return await Clinic.findOne({ studentId }).lean();
}

// ==========================================
// FACULTY
// ==========================================

async function getFacultyFromDB() {
  return await Faculty.find().sort({ name: 1 }).lean();
}

// ==========================================
// ANNOUNCEMENTS
// ==========================================

async function getAnnouncementsFromDB() {
  return await Announcement.find({ status: "Published" })
    .sort({ datePosted: -1 })
    .lean();
}

// ==========================================
// DASHBOARD
// ==========================================


// ===================================
async function getDashboardFromDB(studentId) {
  const [
    student,
    grades,
    schedule,
    enrollment,
    finance,
    library,
    announcements,
    subjects,
  ] = await Promise.all([
    Student.findOne({ studentId }).lean(),
    Grade.find({ studentId }).lean(),
    Schedule.find({ studentId })
      .sort({ day: 1, startTime: 1 })
      .lean(),
    Enrollment.findOne({ studentId }).lean(),
    Finance.findOne({ studentId }).lean(),
    Library.findOne({ studentId }).lean(),
    Announcement.find({ status: "Published" })
      .sort({ datePosted: -1 })
      .limit(4)
      .lean(),
    Subject.find().lean(),
  ]);

  if (!student) {
    return null;
  }

  // Get enrolled subject codes
  const enrolledSubjectCodes = enrollment?.subjects || [];

  // Get units for enrolled subjects
  const enrolledSubjects = subjects.filter((subject) =>
    enrolledSubjectCodes.includes(subject.subjectCode)
  );

  const totalUnits = enrolledSubjects.reduce(
    (total, subject) => total + (Number(subject.units) || 0),
    0
  );

  // Calculate average grade
  const numericGrades = grades
    .map((grade) => Number(grade.finalGrade))
    .filter((grade) => Number.isFinite(grade) && grade > 0);

  const averageGrade =
    numericGrades.length > 0
      ? Number(
          (
            numericGrades.reduce((total, grade) => total + grade, 0) /
            numericGrades.length
          ).toFixed(2)
        )
      : null;

  return {
    student,
    stats: {
      subjects: enrolledSubjectCodes.length,
      units: totalUnits,
      averageGrade,
      financeBalance: finance?.balance || 0,
      borrowedBooks: library?.borrowedCount || 0,
      overdueBooks: library?.overdueCount || 0,

      // Additional dashboard information
      totalGrades: grades.length,
      totalClasses: schedule.length,
      enrollmentStatus: enrollment?.status || "Not Available",
      financeStatus: finance?.paymentStatus || "Not Available",
    },
    schedule,
    announcements,
  };
}

// EXPORT FUNCTIONS
// ==========================================

module.exports = {
  getStudentFromDB,
  getSubjectsFromDB,
  getGradesFromDB,
  getScheduleFromDB,
  getEnrollmentFromDB,
  getFinanceFromDB,
  getLibraryFromDB,
  getClinicFromDB,
  getFacultyFromDB,
  getAnnouncementsFromDB,
  getDashboardFromDB,
};
