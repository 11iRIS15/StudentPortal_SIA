
import { useEffect, useRef, useState } from "react";
import {
  Search,
  Bell,
  ChevronRight,
  Menu,
  X,
  UserRound,
  Check,
} from "lucide-react";

function Navbar({ student, activePage, onMenuToggle }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const searchRef = useRef(null);

  const pages = [
    "Dashboard",
    "My Profile",
    "My Subjects",
    "Class Schedule",
    "Grades",
    "Enrollment",
    "Finance",
    "Library",
    "Faculty",
    "Clinic",
    "Announcements",
  ];

  const notifications = [
    {
      id: 1,
      title: "Welcome to Student Portal",
      message: "Welcome! You can now access your student information.",
      date: "Today",
    },
    {
      id: 2,
      title: "Enrollment Information",
      message: "Check your enrollment details and registered subjects.",
      date: "Today",
    },
    {
      id: 3,
      title: "Academic Reminder",
      message: "Don't forget to check your grades and class schedule.",
      date: "Recently",
    },
  ];

  const filteredPages = pages.filter((page) =>
    page.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function navigate(page) {
    window.dispatchEvent(
      new CustomEvent("portal:navigate", {
        detail: page,
      })
    );

    setSearchOpen(false);
    setNotificationsOpen(false);
    setSearchTerm("");
  }

  function toggleSearch() {
    setNotificationsOpen(false);
    setSearchOpen((previous) => !previous);
    setSearchTerm("");
  }

  function toggleNotifications() {
    setSearchOpen(false);
    setNotificationsOpen((previous) => !previous);
  }

  useEffect(() => {
    if (searchOpen) {
      searchRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setNotificationsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const fullName =
    student?.firstName && student?.lastName
      ? `${student.firstName} ${student.lastName}`
      : student?.name || "Student";

  const studentId = student?.studentId || "";

  return (
    <header className="portal-navbar">
      <div className="navbar-left">
        <button
          className="navbar-menu-button"
          onClick={onMenuToggle}
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>

        <span className="navbar-brand-text">Student Portal</span>

        <ChevronRight size={18} className="navbar-breadcrumb-icon" />

        <span className="navbar-current-page">
          {activePage || "Dashboard"}
        </span>
      </div>

      <div className="navbar-right">
        {/* Search */}
        <button
          className={`navbar-search-button ${searchOpen ? "active" : ""}`}
          onClick={toggleSearch}
        >
          {searchOpen ? <X size={18} /> : <Search size={18} />}
          <span>{searchOpen ? "Close" : "Search"}</span>
        </button>

        {/* Notification bell */}
        <button
          className={`navbar-notification-button ${
            notificationsOpen ? "active" : ""
          }`}
          onClick={toggleNotifications}
          aria-label="Notifications"
        >
          <Bell size={21} />

          {hasUnread && <span className="notification-dot" />}
        </button>

        <div className="navbar-divider" />

        {/* Profile */}
        <button
          className="navbar-profile-button"
          onClick={() => navigate("My Profile")}
        >
          <div className="navbar-avatar">
            {student?.firstName?.charAt(0)?.toUpperCase() || "S"}
          </div>

          <div className="navbar-profile-info">
            <span className="navbar-profile-name">{fullName}</span>
            <span className="navbar-profile-id">{studentId}</span>
          </div>
        </button>
      </div>

      {/* Search dropdown */}
      {searchOpen && (
        <div className="navbar-dropdown navbar-search-dropdown">
          <div className="navbar-dropdown-heading">
            <Search size={18} />
            <span>Search Portal</span>
          </div>

          <input
            ref={searchRef}
            className="navbar-search-input"
            type="text"
            placeholder="Search pages..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <div className="navbar-search-results">
            {filteredPages.length > 0 ? (
              filteredPages.map((page) => (
                <button
                  key={page}
                  className="navbar-search-result"
                  onClick={() => navigate(page)}
                >
                  <span>{page}</span>
                  <ChevronRight size={16} />
                </button>
              ))
            ) : (
              <div className="navbar-no-results">
                No pages found for "{searchTerm}"
              </div>
            )}
          </div>
        </div>
      )}

      {/* Notifications dropdown */}
      {notificationsOpen && (
        <div className="navbar-dropdown navbar-notifications-dropdown">
          <div className="navbar-dropdown-heading notification-heading">
            <div>
              <h3>Notifications</h3>
              <p>Stay updated with your portal</p>
            </div>

            {hasUnread && (
              <button
                className="mark-read-button"
                onClick={() => setHasUnread(false)}
                title="Mark all as read"
              >
                <Check size={16} />
                <span>Mark read</span>
              </button>
            )}
          </div>

          <div className="notification-list">
            {notifications.map((notification) => (
              <button
                className="notification-item"
                key={notification.id}
                onClick={() => {
                  setHasUnread(false);
                  navigate(
                    notification.id === 2 ? "Enrollment" : "Announcements"
                  );
                }}
              >
                <div className="notification-icon">
                  <Bell size={16} />
                </div>

                <div className="notification-content">
                  <strong>{notification.title}</strong>
                  <p>{notification.message}</p>
                  <span>{notification.date}</span>
                </div>
              </button>
            ))}
          </div>

          <button
            className="notification-footer"
            onClick={() => navigate("Announcements")}
          >
            View Announcements
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
