
import { useEffect, useMemo, useState } from "react";

function DataPage({
  title,
  description,
  loadData,
  columns = [],
  searchFields = [],
  renderCards,
})  {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  async function load() {
    setLoading(true);
    setError("");

    try {
      const response = await loadData();
      setData(response.data);
    } catch (err) {
      setError(
        err.response?.data?.detail ||
        err.message ||
        "Unable to load information."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) return data;

    const keyword = search.toLowerCase().trim();

    if (!keyword) return data;

    return data.filter((item) =>
      searchFields.some((field) =>
        String(item[field] ?? "")
          .toLowerCase()
          .includes(keyword)
      )
    );
  }, [data, search, searchFields]);

  function getRows() {
    if (Array.isArray(filteredData)) {
      return filteredData;
    }

    if (filteredData?.books) return filteredData.books;
    if (filteredData?.payments) return filteredData.payments;
    if (filteredData?.visits) return filteredData.visits;
    if (filteredData?.appointments) return filteredData.appointments;
    if (filteredData?.reservations) return filteredData.reservations;
    if (filteredData?.subjects) return filteredData.subjects;

    return [];
  }

  const rows = getRows();

  return (
    <div className="portal-data-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">STUDENT PORTAL</p>
          <h1>{title}</h1>
          <p className="page-description">{description}</p>
        </div>

        <button className="refresh-button" onClick={load}>
          ↻ Refresh
        </button>
      </div>

      {loading && (
        <div className="content-card loading-state">
          Loading {title.toLowerCase()}...
        </div>
      )}

      {!loading && error && (
        <div className="error-card">
          <h3>Unable to load {title}</h3>
          <p>{error}</p>
          <button onClick={load}>Try Again</button>
        </div>
      )}

      {!loading && !error && (
        <>
          {renderCards && (
            <div className="data-summary">
              {renderCards(data)}
            </div>
          )}

          {Array.isArray(data) && (
            <div className="content-card data-table-card">
              <div className="card-header">
                <div>
                  <h3>{title} Records</h3>
                  <p>{filteredData.length} record(s) found</p>
                </div>
              </div>

              <input
                className="data-search"
                placeholder={`Search ${title.toLowerCase()}...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="table-container">
                <table className="portal-table">
                  <thead>
                    <tr>
                      {columns.map((column) => (
                        <th key={column.key}>{column.label}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {rows.map((row, index) => (
                      <tr
                        key={
                          row._id ||
                          row.id ||
                          row.transactionId ||
                          row.paymentId ||
                          row.visitId ||
                          row.scheduleId ||
                          row.gradeId ||
                          row.subjectId ||
                          index
                        }
                      >
                        {columns.map((column) => (
                          <td key={column.key}>
                            {column.render
                              ? column.render(row[column.key], row)
                              : formatValue(row[column.key])}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {rows.length === 0 && (
                  <div className="empty-table">
                    No records found.
                  </div>
                )}
              </div>
            </div>
          )}

          {!Array.isArray(data) && data && (
            <div className="content-card object-data">
              {Object.entries(data).map(([key, value]) => (
                <div className="object-section" key={key}>
                  <h3>{formatLabel(key)}</h3>

                  {Array.isArray(value) ? (
                    <div className="value-list">
                      {value.length === 0 ? (
                        <span className="empty-value">
                          No items available
                        </span>
                      ) : (
                        value.map((item, index) => (
                          <div className="value-list-item" key={index}>
                            {typeof item === "object" && item !== null
                              ? Object.entries(item).map(([childKey, childValue]) => (
                                  <div className="nested-info-row" key={childKey}>
                                    <span>{formatLabel(childKey)}</span>
                                    <strong>{formatValue(childValue)}</strong>
                                  </div>
                                ))
                              : (
                                <span className="subject-chip">
                                  {String(item)}
                                </span>
                              )}
                          </div>
                        ))
                      )}
                    </div>
                  ) : value !== null && typeof value === "object" ? (
                    <div className="nested-object">
                      {Object.entries(value).map(([childKey, childValue]) => (
                        <div className="nested-info-row" key={childKey}>
                          <span>{formatLabel(childKey)}</span>
                          <strong>{formatValue(childValue)}</strong>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="info-row">
                      <span>{formatLabel(key)}</span>
                      <strong className={getValueClass(key, value)}>
                        {formatValue(value)}
                      </strong>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function formatValue(value) {
  if (value === null || value === undefined || value === "") {
    return "—";
  }

  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(", ") : "—";
  }

  if (typeof value === "object") {
    return Object.entries(value)
      .map(([key, item]) => `${formatLabel(key)}: ${formatValue(item)}`)
      .join(", ");
  }

  return String(value);
}

function getValueClass(key, value) {
  const name = key.toLowerCase();
  const text = String(value ?? "").toLowerCase();

  if (name.includes("status")) {
    if (
      text.includes("enrolled") ||
      text.includes("approved") ||
      text.includes("paid") ||
      text.includes("active")
    ) {
      return "status-value status-success";
    }

    if (
      text.includes("pending") ||
      text.includes("unpaid") ||
      text.includes("warning")
    ) {
      return "status-value status-warning";
    }

    if (
      text.includes("rejected") ||
      text.includes("failed") ||
      text.includes("overdue")
    ) {
      return "status-value status-danger";
    }
  }

  return "";
}

function formatLabel(value) {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default DataPage;
