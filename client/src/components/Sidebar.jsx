import {
  LayoutDashboard,
  UserRound,
  BookOpen,
  GraduationCap,
  CalendarDays,
  ClipboardList,
  Wallet,
  Library,
  Users,
  HeartPulse,
  Megaphone,
  LogOut,
  X
} from "lucide-react";

import Logo from "./Logo";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "My Profile", icon: UserRound },
  { name: "My Subjects", icon: BookOpen },
  { name: "Class Schedule", icon: CalendarDays },
  { name: "Grades", icon: GraduationCap },
  { name: "Enrollment", icon: ClipboardList },
  { name: "Finance", icon: Wallet },
  { name: "Library", icon: Library },
  { name: "Faculty", icon: Users },
  { name: "Clinic", icon: HeartPulse },
  { name: "Announcements", icon: Megaphone }
];

function Sidebar({
  activePage,
  onNavigate,
  onLogout,
  open,
  onClose
}) {
  return (
    <>
      {open && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
        />
      )}

      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <Logo size={48} />

          <button
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-label">
          STUDENT MENU
        </div>

        <nav className="sidebar-navigation">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = activePage === item.name;

            return (
              <button
                key={item.name}
                className={`nav-item ${active ? "active" : ""}`}
                onClick={() => {
                  onNavigate(item.name);
                  onClose();
                }}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <button
            className="nav-item logout-button"
            onClick={onLogout}
          >
            <LogOut size={19} />
            <span>Log Out</span>
          </button>

          <div className="sidebar-footer">
            IDSC Student Portal · Version 1.0
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;