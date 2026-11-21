
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function StudentLayout({
  student,
  activePage,
  onNavigate,
  onLogout,
  children,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleNavigate(page) {
    onNavigate(page);
    setSidebarOpen(false);
  }

  return (
    <div className="student-layout">
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        onLogout={onLogout}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="student-main">
        <Navbar
          student={student}
          activePage={activePage}
          onNavigate={handleNavigate}
          onMenuToggle={() => setSidebarOpen((previous) => !previous)}
        />

        <main className="student-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default StudentLayout;
