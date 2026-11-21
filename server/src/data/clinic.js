const clinic = {
  studentId: "2026-00123",
  clinicInformation: {
    clinicName: "IDSC Student Clinic",
    location: "School Clinic",
    operatingHours: "Monday - Friday, 8:00 AM - 5:00 PM",
    emergencyContact: "School Clinic"
  },
  visits: [
    {
      visitId: "CLN-001",
      date: "2026-10-20",
      reason: "Headache",
      attendingPersonnel: "School Nurse",
      status: "Completed",
      notes: "Visit completed"
    }
  ],
  appointments: [
    {
      appointmentId: "APT-001",
      date: "2026-11-25",
      time: "10:00 AM",
      purpose: "General consultation",
      status: "Pending"
    }
  ]
};

module.exports = clinic;