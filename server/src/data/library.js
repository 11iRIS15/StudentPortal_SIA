const library = {
  studentId: "2026-00123",
  borrowedCount: 2,
  overdueCount: 1,
  reservedCount: 1,
  books: [
    {
      transactionId: "LIB-001",
      bookId: "BOOK-001",
      title: "Introduction to Programming",
      author: "John Smith",
      borrowDate: "2026-11-01",
      dueDate: "2026-11-15",
      status: "Overdue",
      fine: 50
    },
    {
      transactionId: "LIB-002",
      bookId: "BOOK-002",
      title: "Database Management Systems",
      author: "Thomas Connolly",
      borrowDate: "2026-11-10",
      dueDate: "2026-11-25",
      status: "Borrowed",
      fine: 0
    }
  ],
  reservations: [
    {
      reservationId: "RES-001",
      bookId: "BOOK-003",
      title: "Computer Networks",
      reservationDate: "2026-11-15",
      status: "Pending"
    }
  ]
};

module.exports = library;