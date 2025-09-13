import React from "react";

export default function FilterTable({
  label1 = "Status",
  label2 = "Scroll Type",
  label3 = "Search by Scroll No",
  option1 = [],
  option2 = [],
  filters,
  handleChange,
}) {
  return (
    <div className="row mb-4">
      <div className="col-md-3">
        <label htmlFor="statusSelect" className="form-label">
          {label1}
        </label>
        <select
          className="form-select"
          id="statusSelect"
          name="label1"
          value={filters.label1}
          onChange={handleChange}
        >
          {option1.map((item) => (
            <option value={item}>{item}</option>
          ))}
          {/* <option value="pending">Pending</option>
          <option value="completed">Completed</option> */}
        </select>
      </div>
      <div className="col-md-3">
        <label htmlFor="scrollTypeSelect" className="form-label">
          {label2}
        </label>
        <select
          className="form-select"
          id="scrollTypeSelect"
          name="label2"
          value={filters.label2}
          onChange={handleChange}
        >
          {option2.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="col-md-6">
        <label
          htmlFor="scrollSearch"
          className="form-label"
          name="label3"
          value={filters.label3}
          onChange={handleChange}
        >
          {label3}
        </label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="scrollSearch"
            placeholder="Enter Scroll Number"
          />
          <button className="btn btn-primary" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
