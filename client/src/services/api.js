import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

export const studentApi = {
  dashboard: (studentId) =>
    api.get(`/dashboard/${studentId}`),

  profile: (studentId) =>
    api.get(`/students/${studentId}/profile`),

  subjects: (studentId) =>
    api.get(`/students/${studentId}/subjects`),

  grades: (studentId) =>
    api.get(`/students/${studentId}/grades`),

  schedule: (studentId) =>
    api.get(`/students/${studentId}/schedule`),

  enrollment: (studentId) =>
    api.get(`/students/${studentId}/enrollment`),

  finance: (studentId) =>
    api.get(`/students/${studentId}/finance`),

  library: (studentId) =>
    api.get(`/students/${studentId}/library`),

  clinic: (studentId) =>
    api.get(`/students/${studentId}/clinic`),

  faculty: () =>
    api.get("/faculty"),

  announcements: () =>
    api.get("/announcements")
};

export default api;