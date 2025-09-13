import React from "react";
import ScrollTable from "../features/scroll-table";

export default function ScrollsPage() {
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-start">
        <i className="bi bi-journal-text me-2"></i>Scrolls
      </h1>
      <ScrollTable />
    </div>
  );
}
