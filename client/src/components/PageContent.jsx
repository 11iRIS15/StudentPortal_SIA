import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Wallet,
  Library,
  HeartPulse,
  Megaphone,
  Users,
  ClipboardList,
  UserRound,
} from "lucide-react";

const pageInfo = {
  "My Profile": {
    icon: UserRound,
    title: "Student Profile",
    description: "View your personal and academic information.",
  },
  "My Subjects": {
    icon: BookOpen,
    title: "My Subjects",
    description: "View the subjects you are enrolled in.",
  },
  "Class Schedule": {
    icon: CalendarDays,
    title: "Class Schedule",
    description: "Check your weekly class schedule.",
  },
  Grades: {
    icon: GraduationCap,
    title: "Academic Grades",
    description: "Review your grades and academic performance.",
  },
  Enrollment: {
    icon: ClipboardList,
    title: "Enrollment",
    description: "View your enrollment status and subjects.",
  },
  Finance: {
    icon: Wallet,
    title: "Student Finance",
    description: "Review tuition, fees and payment records.",
  },
  Library: {
    icon: Library,
    title: "Library",
    description: "View your borrowing records and due dates.",
  },
  Clinic: {
    icon: HeartPulse,
    title: "Student Clinic",
    description: "View clinic services and appointments.",
  },
  Announcements: {
    icon: Megaphone,
    title: "Announcements",
    description: "Stay updated with school announcements.",
  },
  Faculty: {
    icon: Users,
    title: "Faculty",
    description: "View your instructors and faculty information.",
  },
};

function PageContent({ page }) {
  const current = pageInfo[page];

  if (!current) {
    return null;
  }

  const Icon = current.icon;

  return (
    <div className="dashboard-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">STUDENT PORTAL</p>
          <h1>{current.title}</h1>
          <p className="page-description">{current.description}</p>
        </div>
      </div>

      <div className="content-card">
        <div className="empty-feature">
          <div className="empty-feature-icon">
            <Icon size={30} />
          </div>

          <h2>{current.title}</h2>
          <p>
            This section is being prepared. Data will be loaded
            from the Student Portal API.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageContent;