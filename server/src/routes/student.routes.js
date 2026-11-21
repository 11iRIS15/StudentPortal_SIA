
const express = require("express");
const router = express.Router();

const studentService = require("../services/student.service");

// ==========================================
// HELPER: ASYNC ROUTE HANDLER
// ==========================================

const asyncHandler = (handler) => (req, res, next) => {
  Promise.resolve(handler(req, res, next)).catch(next);
};

// ==========================================
// MODULE INFORMATION
// ==========================================

router.get("/", (req, res) => {
  res.json({
    message: "Student Portal API",
    version: "1.0.0",
    status: "running",
    database: "MongoDB Atlas",
  });
});

// ==========================================
// DASHBOARD
// ==========================================

router.get(
  "/dashboard/:studentId",
  asyncHandler(async (req, res) => {
    const dashboard = await studentService.getDashboardFromDB(
      req.params.studentId
    );

    if (!dashboard) {
      return res.status(404).json({
        type: "about:blank",
        title: "Student Not Found",
        status: 404,
        detail: "The requested student record was not found.",
      });
    }

    res.json(dashboard);
  })
);

// ==========================================
// STUDENT PROFILE
// ==========================================

router.get(
  "/students/:studentId/profile",
  asyncHandler(async (req, res) => {
    const student = await studentService.getStudentFromDB(
      req.params.studentId
    );

    if (!student) {
      return res.status(404).json({
        type: "about:blank",
        title: "Student Not Found",
        status: 404,
        detail: "The requested student record was not found.",
      });
    }

    res.json(student);
  })
);

// ==========================================
// SUBJECTS
// ==========================================

router.get(
  "/students/:studentId/subjects",
  asyncHandler(async (req, res) => {
    const subjects = await studentService.getSubjectsFromDB();
    res.json(subjects);
  })
);

// ==========================================
// GRADES
// ==========================================

router.get(
  "/students/:studentId/grades",
  asyncHandler(async (req, res) => {
    const student = await studentService.getStudentFromDB(
      req.params.studentId
    );

    if (!student) {
      return res.status(404).json({
        type: "about:blank",
        title: "Student Not Found",
        status: 404,
        detail: "The requested student record was not found.",
      });
    }

    const grades = await studentService.getGradesFromDB(
      req.params.studentId
    );

    res.json(grades);
  })
);

// ==========================================
// SCHEDULE
// ==========================================

router.get(
  "/students/:studentId/schedule",
  asyncHandler(async (req, res) => {
    const student = await studentService.getStudentFromDB(
      req.params.studentId
    );

    if (!student) {
      return res.status(404).json({
        type: "about:blank",
        title: "Student Not Found",
        status: 404,
        detail: "The requested student record was not found.",
      });
    }

    const schedule = await studentService.getScheduleFromDB(
      req.params.studentId
    );

    res.json(schedule);
  })
);

// ==========================================
// ENROLLMENT
// ==========================================

router.get(
  "/students/:studentId/enrollment",
  asyncHandler(async (req, res) => {
    const student = await studentService.getStudentFromDB(
      req.params.studentId
    );

    if (!student) {
      return res.status(404).json({
        type: "about:blank",
        title: "Student Not Found",
        status: 404,
        detail: "The requested student record was not found.",
      });
    }

    const enrollment = await studentService.getEnrollmentFromDB(
      req.params.studentId
    );

    if (!enrollment) {
      return res.status(404).json({
        type: "about:blank",
        title: "Enrollment Not Found",
        status: 404,
        detail: "No enrollment record was found for this student.",
      });
    }

    res.json(enrollment);
  })
);

// ==========================================
// FINANCE
// ==========================================

router.get(
  "/students/:studentId/finance",
  asyncHandler(async (req, res) => {
    const student = await studentService.getStudentFromDB(
      req.params.studentId
    );

    if (!student) {
      return res.status(404).json({
        type: "about:blank",
        title: "Student Not Found",
        status: 404,
        detail: "The requested student record was not found.",
      });
    }

    const finance = await studentService.getFinanceFromDB(
      req.params.studentId
    );

    if (!finance) {
      return res.status(404).json({
        type: "about:blank",
        title: "Finance Record Not Found",
        status: 404,
        detail: "No finance record was found for this student.",
      });
    }

    res.json(finance);
  })
);

// ==========================================
// LIBRARY
// ==========================================

router.get(
  "/students/:studentId/library",
  asyncHandler(async (req, res) => {
    const student = await studentService.getStudentFromDB(
      req.params.studentId
    );

    if (!student) {
      return res.status(404).json({
        type: "about:blank",
        title: "Student Not Found",
        status: 404,
        detail: "The requested student record was not found.",
      });
    }

    const library = await studentService.getLibraryFromDB(
      req.params.studentId
    );

    if (!library) {
      return res.status(404).json({
        type: "about:blank",
        title: "Library Record Not Found",
        status: 404,
        detail: "No library record was found for this student.",
      });
    }

    res.json(library);
  })
);

// ==========================================
// CLINIC
// ==========================================

router.get(
  "/students/:studentId/clinic",
  asyncHandler(async (req, res) => {
    const student = await studentService.getStudentFromDB(
      req.params.studentId
    );

    if (!student) {
      return res.status(404).json({
        type: "about:blank",
        title: "Student Not Found",
        status: 404,
        detail: "The requested student record was not found.",
      });
    }

    const clinic = await studentService.getClinicFromDB(
      req.params.studentId
    );

    if (!clinic) {
      return res.status(404).json({
        type: "about:blank",
        title: "Clinic Record Not Found",
        status: 404,
        detail: "No clinic record was found for this student.",
      });
    }

    res.json(clinic);
  })
);

// ==========================================
// FACULTY
// ==========================================

router.get(
  "/faculty",
  asyncHandler(async (req, res) => {
    const faculty = await studentService.getFacultyFromDB();
    res.json(faculty);
  })
);

// ==========================================
// ANNOUNCEMENTS
// ==========================================

router.get(
  "/announcements",
  asyncHandler(async (req, res) => {
    const announcements = await studentService.getAnnouncementsFromDB();
    res.json(announcements);
  })
);

// ==========================================
// EXPORT ROUTER
// ==========================================

module.exports = router;
