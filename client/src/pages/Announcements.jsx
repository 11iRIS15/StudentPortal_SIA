import DataPage from "../components/DataPage";
import { studentApi } from "../services/api";

function Announcement() {
  return (
    <DataPage
      title="Announcements"
      description="View school announcements, important reminders, and activities."
      loadData={() => studentApi.announcements()}
      columns={[
        { key: "announcementId", label: "ID" },
        { key: "title", label: "Title" },
        { key: "category", label: "Category" },
        { key: "datePosted", label: "Date Posted" },
        { key: "priority", label: "Priority" },
        { key: "audience", label: "Audience" }
      ]}
      searchFields={["title", "category", "content", "audience"]}
    />
  );
}

export default Announcement;