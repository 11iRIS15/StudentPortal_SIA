import { useState } from "react";
import { Eye, EyeOff, GraduationCap } from "lucide-react";
import Logo from "../components/Logo";

function Login({ onLogin }) {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!studentId.trim() || !password.trim()) {
      setError("Please enter both your Student ID and password.");
      return;
    }

    onLogin(studentId.trim());
  }

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-brand">
          <Logo size={66} light />
        </div>

        <div className="login-welcome">
          <span className="eyebrow">STUDENT PORTAL</span>

          <h1>
            Your education.
            <br />
            Your future.
            <br />
            All in one place.
          </h1>

          <p>
            Access your academic information, classes, enrollment,
            financial records, and student services from one portal.
          </p>
        </div>

        <div className="login-footer">
          Infotech Development Systems College
        </div>
      </div>

      <div className="login-right">
        <div className="login-form-wrapper">
          <div className="login-icon">
            <GraduationCap size={32} />
          </div>

          <h2>Welcome back!</h2>
          <p>Sign in to access your Student Portal.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="studentId">Student ID</label>

            <input
              id="studentId"
              type="text"
              placeholder="Enter your Student ID"
              autoComplete="username"
              value={studentId}
              onChange={(event) => setStudentId(event.target.value)}
            />

            <label htmlFor="password">Password</label>

            <div className="password-input">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {error && (
              <div className="login-error" role="alert">
                {error}
              </div>
            )}

            <button type="submit" className="login-submit">
              Sign In
            </button>
          </form>

          <div className="login-note">
            <strong>Student Access</strong>
            <span>Use your school-provided account credentials.</span>
          </div>

          <div className="login-demo-note">
            Development demo account: <strong>2026-00123</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;