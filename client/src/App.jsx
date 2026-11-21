import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StudentLayout from "./layouts/StudentLayout";

import Student from "./pages/Student";
import Subject from "./pages/Subjects";
import Grades from "./pages/Grades";
import Schedule from "./pages/Schedule";
import Enrollment from "./pages/Enrollment";
import Finance from "./pages/Finance";
import Library from "./pages/Library";
import Faculty from "./pages/Faculty";
import Clinic from "./pages/Clinic";
import Announcement from "./pages/Announcements";

function App() {
  const [student, setStudent] = useState(null);
  const [activePage, setActivePage] = useState("Dashboard");

  function handleLogin(studentId) {
    if (studentId !== "2026-00123") {
      alert("Demo account: use Student ID 2026-00123");
      return;
    }

    setStudent({
      studentId: "2026-00123",
      firstName: "Iris",
      middleName: "",
      lastName: "Atanante",
      course: "Bachelor of Science in Information Technology",
      courseCode: "BSIT",
      yearLevel: "3rd Year",
      section: "JAVA",
      academicYear: "2026-2027",
      semester: "1st Semester"
    });

    setActivePage("Dashboard");
  }

  function handleLogout() {
    setStudent(null);
    setActivePage("Dashboard");
  }

  function renderPage() {
    switch (activePage) {
      case "Dashboard":
  return (
    <Dashboard
      student={student}
      onNavigate={setActivePage}
    />
  );

      case "My Profile":
        return <Student student={student} />;

      case "My Subjects":
        return <Subject student={student} />;

      case "Grades":
        return <Grades student={student} />;

      case "Class Schedule":
        return <Schedule student={student} />;

      case "Enrollment":
        return <Enrollment student={student} />;

      case "Finance":
        return <Finance student={student} />;

      case "Library":
        return <Library student={student} />;

      case "Faculty":
        return <Faculty student={student} />;

      case "Clinic":
        return <Clinic student={student} />;

      case "Announcements":
        return <Announcement student={student} />;

      default:
        return <Dashboard student={student} />;
    }
  }

  if (!student) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <StudentLayout
      student={student}
      activePage={activePage}
      onNavigate={setActivePage}
      onLogout={handleLogout}
    >
      {renderPage()}
    </StudentLayout>
  );
}

export default App;