import DataPage from "../components/DataPage";
import { studentApi } from "../services/api";

function Grades({ student }) {
  return (
    <DataPage
      title="Grades"
      description="Review your academic performance and subject grades."
      loadData={() => studentApi.grades(student.studentId)}
      columns={[
        { key: "subjectCode", label: "Code" },
        { key: "subjectName", label: "Subject" },
        { key: "prelim", label: "Prelim" },
        { key: "midterm", label: "Midterm" },
        { key: "final", label: "Final" },
        { key: "finalGrade", label: "Final Grade" },
        { key: "remarks", label: "Remarks" }
      ]}
      searchFields={["subjectCode", "subjectName", "remarks"]}
    />
  );
}

export default Grades;