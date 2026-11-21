const finance = {
  studentId: "2026-00123",
  academicYear: "2026-2027",
  semester: "1st Semester",
  totalAssessment: 18500,
  totalPaid: 10000,
  balance: 8500,
  dueDate: "2026-12-15",
  paymentStatus: "Partial",
  breakdown: [
    { feeName: "Tuition Fee", amount: 12000 },
    { feeName: "Laboratory Fee", amount: 2500 },
    { feeName: "Miscellaneous Fee", amount: 2000 },
    { feeName: "Library Fee", amount: 1000 },
    { feeName: "Student Services Fee", amount: 1000 }
  ],
  payments: [
    {
      paymentId: "PAY-001",
      date: "2026-06-20",
      description: "Initial Payment",
      amount: 5000,
      method: "Cash",
      status: "Paid"
    },
    {
      paymentId: "PAY-002",
      date: "2026-08-05",
      description: "Second Payment",
      amount: 5000,
      method: "Cash",
      status: "Paid"
    }
  ]
};

module.exports = finance;