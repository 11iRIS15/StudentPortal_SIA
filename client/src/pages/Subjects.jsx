import DataPage from "../components/DataPage";
import { studentApi } from "../services/api";

function Subject({ student }) {
  return (
    <DataPage
      title="My Subjects"
      description="View your currently enrolled subjects and instructors."
      loadData={() => studentApi.subjects(student.studentId)}
      columns={[
        { key: "subjectCode", label: "Subject Code" },
        { key: "subjectName", label: "Subject Name" },
        { key: "units", label: "Units" },
        { key: "instructor", label: "Instructor" },
        { key: "schedule", label: "Schedule" },
        { key: "room", label: "Room" }
      ]}
      searchFields={["subjectCode", "subjectName", "instructor", "room"]}
    />
  );
}

export default Subject;