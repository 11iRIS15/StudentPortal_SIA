import DataPage from "../components/DataPage";
import { studentApi } from "../services/api";

function Faculty() {
  return (
    <DataPage
      title="Faculty"
      description="View your instructors, assigned subjects, offices, and consultation schedules."
      loadData={() => studentApi.faculty()}
      columns={[
        { key: "facultyId", label: "Faculty ID" },
        { key: "name", label: "Instructor" },
        { key: "department", label: "Department" },
        { key: "position", label: "Position" },
        { key: "email", label: "Email" },
        { key: "office", label: "Office" }
      ]}
      searchFields={["name", "department", "email", "position"]}
    />
  );
}

export default Faculty;