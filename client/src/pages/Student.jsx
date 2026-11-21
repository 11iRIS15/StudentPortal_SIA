import { useEffect, useState } from "react";
import { studentApi } from "../services/api";
import { UserRound, GraduationCap, Mail, Phone } from "lucide-react";

function Student({ student }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await studentApi.profile(student.studentId);
        setProfile(response.data);
      } catch (err) {
        setError(
          err.response?.data?.detail ||
          "Unable to load student profile."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [student.studentId]);

  if (loading) {
    return <div className="content-card loading-state">Loading profile...</div>;
  }

  if (error) {
    return <div className="error-card">{error}</div>;
  }

  if (!profile) {
    return null;
  }

  const fullName = [
    profile.firstName,
    profile.middleName,
    profile.lastName
  ].filter(Boolean).join(" ");

  return (
    <div className="dashboard-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">STUDENT INFORMATION</p>
          <h1>My Profile</h1>
          <p className="page-description">
            View your personal and academic information.
          </p>
        </div>
      </div>

      <div className="profile-layout">
        <div className="content-card profile-card">
          <div className="profile-avatar">
            <UserRound size={48} />
          </div>

          <h2>{fullName}</h2>
          <p>{profile.studentId}</p>

          <span className="profile-status">
            {profile.status || "Active Student"}
          </span>

          <div className="profile-quick-info">
            <div>
              <Mail size={17} />
              <span>{profile.email || "No email available"}</span>
            </div>

            <div>
              <Phone size={17} />
              <span>{profile.phone || "No contact number available"}</span>
            </div>
          </div>
        </div>

        <div className="content-card profile-details">
          <div className="card-header">
            <div>
              <h3>Personal Information</h3>
              <p>Your student record</p>
            </div>
          </div>

          <div className="profile-fields">
            <ProfileField label="Student ID" value={profile.studentId} />
            <ProfileField label="First Name" value={profile.firstName} />
            <ProfileField label="Middle Name" value={profile.middleName} />
            <ProfileField label="Last Name" value={profile.lastName} />
            <ProfileField label="Email" value={profile.email} />
            <ProfileField label="Contact Number" value={profile.phone} />
            <ProfileField label="Birth Date" value={profile.birthDate} />
            <ProfileField label="Gender" value={profile.gender} />
            <ProfileField label="Address" value={profile.address} />
          </div>

          <div className="card-header profile-academic-heading">
            <div>
              <h3>Academic Information</h3>
              <p>Current academic placement</p>
            </div>
          </div>

          <div className="profile-fields">
            <ProfileField label="Course" value={profile.course} />
            <ProfileField label="Course Code" value={profile.courseCode} />
            <ProfileField label="Year Level" value={profile.yearLevel} />
            <ProfileField label="Section" value={profile.section} />
            <ProfileField label="Academic Year" value={profile.academicYear} />
            <ProfileField label="Semester" value={profile.semester} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileField({ label, value }) {
  return (
    <div className="profile-field">
      <span>{label}</span>
      <strong>{value || "—"}</strong>
    </div>
  );
}

export default Student;