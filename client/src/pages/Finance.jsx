import DataPage from "../components/DataPage";
import { studentApi } from "../services/api";

function Finance({ student }) {
  return (
    <DataPage
      title="Finance"
      description="View your assessment, payment history, and remaining balance."
      loadData={() => studentApi.finance(student.studentId)}
      columns={[
        { key: "paymentId", label: "Payment ID" },
        { key: "date", label: "Date" },
        { key: "description", label: "Description" },
        { key: "amount", label: "Amount" },
        { key: "method", label: "Method" },
        { key: "status", label: "Status" }
      ]}
      searchFields={["paymentId", "description", "method", "status"]}
    />
  );
}

export default Finance;