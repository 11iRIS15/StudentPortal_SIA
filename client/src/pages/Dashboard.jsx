import { useEffect, useState } from "react";

import {
  BookOpen,
  GraduationCap,
  Wallet,
  Library,
  CalendarDays,
  Megaphone,
  Clock3,
  ArrowRight
} from "lucide-react";

import { studentApi } from "../services/api";

function Dashboard({ student, onNavigate }) {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadDashboard() {
    setLoading(true);
    setError("");

    try {
      const response = await studentApi.dashboard(student.studentId);
      setDashboard(response.data);
    } catch (err) {
      setError(
        err.response?.data?.detail ||
        "Unable to connect to Student Portal API."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, [student.studentId]);

  if (loading) {
    return (
      <div className="content-card loading-state">
        <Clock3 size={24} />
        <p>Loading student dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-card">
        <h3>Dashboard connection failed</h3>
        <p>{error}</p>
        <button onClick={loadDashboard}>Retry Connection</button>
      </div>
    );
  }

  const studentInfo = dashboard.student;
  const stats = dashboard.stats;

  return (
    <div className="dashboard-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">STUDENT PORTAL</p>
          <h1>Dashboard</h1>
          <p className="page-description">
            Your academic information and student services in one place.
          </p>
        </div>

        <button className="refresh-button" onClick={loadDashboard}>
          ↻ Refresh
        </button>
      </div>

      {/* WELCOME */}
      <section className="welcome-card">
        <div>
          <span className="welcome-label">
            INFOTECH DEVELOPMENT SYSTEMS COLLEGE
          </span>

          <h2>
            Welcome back, {studentInfo.firstName}!
          </h2>

          <p>
            Here is your academic overview for this semester.
          </p>

          <div className="welcome-tags">
            <span>{studentInfo.courseCode}</span>
            <span>{studentInfo.yearLevel}</span>
            <span>{studentInfo.section}</span>
          </div>
        </div>

        <div className="welcome-illustration">
          <GraduationCap size={85} />
        </div>
      </section>

      {/* STATS */}
      <section className="stats-grid">
        <StatCard
          icon={<BookOpen />}
          color="green"
          label="Enrolled Subjects"
          value={stats.subjects}
          description={`${stats.units} total academic units`}
        />

        <StatCard
          icon={<GraduationCap />}
          color="blue"
          label="Average Midterm Grade"
          value={stats.averageGrade ?? "N/A"}
          description="Based on available grades"
        />

        <StatCard
          icon={<Wallet />}
          color="orange"
          label="Outstanding Balance"
          value={formatCurrency(stats.financeBalance)}
          description="Student Finance record"
        />

        <StatCard
          icon={<Library />}
          color="purple"
          label="Borrowed Books"
          value={stats.borrowedBooks}
          description={`${stats.overdueBooks} overdue book(s)`}
        />
      </section>

      {/* CONTENT */}
      <section className="dashboard-grid">
        <div className="content-card">
          <div className="card-header">
            <div>
              <h3>Student Information</h3>
              <p>Your current academic details</p>
            </div>
          </div>

          <div className="academic-info">
            <InfoRow label="Student ID" value={studentInfo.studentId} />
            <InfoRow label="Full Name" value={`${studentInfo.firstName} ${studentInfo.lastName}`} />
            <InfoRow label="Course" value={studentInfo.courseCode} />
            <InfoRow label="Year Level" value={studentInfo.yearLevel} />
            <InfoRow label="Section" value={studentInfo.section} />
            <InfoRow label="Academic Year" value={studentInfo.academicYear} />
            <InfoRow label="Semester" value={studentInfo.semester} />
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <div>
              <h3>Announcements</h3>
              <p>Latest school announcements</p>
            </div>

            <Megaphone size={20} color="#078f36" />
          </div>

          <div className="announcement-list">
            {dashboard.announcements.map((announcement) => (
              <div className="announcement-item" key={announcement.announcementId}>
                <div className="announcement-icon">
                  <Megaphone size={18} />
                </div>

                <div>
                  <strong>{announcement.title}</strong>
                  <span>{announcement.category}</span>
                  <small>{announcement.datePosted}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="content-card dashboard-schedule">
        <div className="card-header">
          <div>
            <h3>Class Schedule</h3>
            <p>Your upcoming class schedule</p>
          </div>

          <CalendarDays size={20} color="#078f36" />
        </div>

        <div className="table-container">
          <table className="portal-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Subject</th>
                <th>Time</th>
                <th>Room</th>
              </tr>
            </thead>

            <tbody>
              {dashboard.schedule.map((item) => (
                <tr key={item.scheduleId}>
                  <td>{item.day}</td>
                  <td>
                    <strong>{item.subjectCode}</strong>
                    <div className="table-secondary">{item.subjectName}</div>
                  </td>
                  <td>{item.startTime} – {item.endTime}</td>
                  <td>{item.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="quick-access-section">
        <h3>Student Services</h3>

        <div className="quick-access-grid">
          <QuickLink icon={<Library />} title="Library" subtitle="Books & borrowing" />
          <QuickLink icon={<Wallet />} title="Finance" subtitle="Balance & payments" />
          <QuickLink icon={<GraduationCap />} title="Grades" subtitle="Academic results" />
          <QuickLink icon={<CalendarDays />} title="Schedule" subtitle="Your classes" />
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, color, label, value, description }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>
        {icon}
      </div>

      <span className="stat-label">{label}</span>
      <div className="stat-value">{value}</div>
      <div className="stat-description">{description}</div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="info-row">
      <span>{label}</span>
      <strong>{value || "—"}</strong>
    </div>
  );
}

function QuickLink({ icon, title, subtitle, onClick }) {
  return (
    <button
      className="quick-link-card"
      type="button"
      onClick={onClick}
    >
      <div className="quick-link-icon">{icon}</div>

      <div>
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </div>

      <ArrowRight size={16} />
    </button>
  );
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP"
  }).format(amount || 0);
}

export default Dashboard;