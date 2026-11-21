import DataPage from "../components/DataPage";
import { studentApi } from "../services/api";

function Library({ student }) {
  return (
    <DataPage
      title="Library"
      description="View borrowed books, reservations, overdue records, and library status."
      loadData={() => studentApi.library(student.studentId)}
      columns={[
        { key: "title", label: "Book Title" },
        { key: "author", label: "Author" },
        { key: "borrowDate", label: "Borrowed Date" },
        { key: "dueDate", label: "Due Date" },
        { key: "status", label: "Status" },
        { key: "fine", label: "Fine" }
      ]}
      searchFields={["title", "author", "status"]}
    />
  );
}

export default Library;