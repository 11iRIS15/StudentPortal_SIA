import DataPage from "../components/DataPage";
import { studentApi } from "../services/api";

function Clinic({ student }) {
  return (
    <DataPage
      title="Clinic"
      description="View clinic visits, upcoming appointments, and student health services."
      loadData={() => studentApi.clinic(student.studentId)}
      columns={[
        { key: "visitId", label: "Visit ID" },
        { key: "date", label: "Visit Date" },
        { key: "reason", label: "Reason" },
        { key: "attendingPersonnel", label: "Personnel" },
        { key: "status", label: "Status" }
      ]}
      searchFields={["visitId", "reason", "status"]}
    />
  );
}

export default Clinic;