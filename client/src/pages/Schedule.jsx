import DataPage from "../components/DataPage";
import { studentApi } from "../services/api";

function Schedule({ student }) {
  return (
    <DataPage
      title="Class Schedule"
      description="View your weekly classes, instructors, time, and room assignments."
      loadData={() => studentApi.schedule(student.studentId)}
      columns={[
        { key: "day", label: "Day" },
        { key: "subjectCode", label: "Subject Code" },
        { key: "subjectName", label: "Subject" },
        { key: "startTime", label: "Start" },
        { key: "endTime", label: "End" },
        { key: "room", label: "Room" },
        { key: "instructor", label: "Instructor" }
      ]}
      searchFields={["day", "subjectName", "subjectCode", "room", "instructor"]}
    />
  );
}

export default Schedule;