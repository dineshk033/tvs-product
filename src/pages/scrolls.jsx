import React from "react";
import ScrollTable from "../features/scroll-table";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function ScrollsPage() {
  const navigate = useNavigate();
  const scrollsData = useSelector((state) => state.scrolls.filterData);
  console.log("=============================", scrollsData);
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-start">
        <i className="bi bi-journal-text me-2"></i>Scrolls
        <button
          className="btn btn-sm btn-success ms-4"
          onClick={() => navigate("/scrolls/add")}
        >
          Add Scroll
        </button>
      </h1>
      <ScrollTable />
    </div>
  );
}
