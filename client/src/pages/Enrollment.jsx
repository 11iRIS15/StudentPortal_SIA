import DataPage from "../components/DataPage";
import { studentApi } from "../services/api";

function Enrollment({ student }) {
  return (
    <DataPage
      title="Enrollment"
      description="View your enrollment status, academic year, semester, and enrolled subject codes."
      loadData={() => studentApi.enrollment(student.studentId)}
    />
  );
}

export default Enrollment;