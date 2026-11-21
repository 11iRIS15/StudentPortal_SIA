const studentService = require("../services/student.service");

function getProfile(req, res, next) {
  try {
    const student = studentService.getStudentProfile(req.params.studentId);

    if (!student) {
      return res.status(404).json({
        type: "about:blank",
        title: "Student Not Found",
        status: 404,
        detail: "The requested student does not exist.",
        instance: req.originalUrl,
      });
    }

    res.json(student);
  } catch (error) {
    next(error);
  }
}

function getSubjects(req, res, next) {
  try {
    const subjects = studentService.getStudentSubjects(req.params.studentId);

    if (!subjects) {
      return res.status(404).json({
        type: "about:blank",
        title: "Student Not Found",
        status: 404,
        detail: "The requested student does not exist.",
        instance: req.originalUrl,
      });
    }

    res.json(subjects);
  } catch (error) {
    next(error);
  }
}

function getDashboard(req, res, next) {
  try {
    const dashboard = studentService.getStudentDashboard(
      req.params.studentId
    );

    if (!dashboard) {
      return res.status(404).json({
        type: "about:blank",
        title: "Student Not Found",
        status: 404,
        detail: "The requested student does not exist.",
        instance: req.originalUrl,
      });
    }

    res.json(dashboard);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProfile,
  getSubjects,
  getDashboard,
};