import React from "react";

export default function Header() {
  return (
    <div className="bg-dark p-3 w-100 text-white d-flex justify-content-between">
      <h4 className="mb-0">TVS Credit</h4>
      <div>
        <i class="bi bi-bell me-3"></i>
        <i class="bi bi-list-task me-3"></i>
        <i class="bi bi-person-circle me-2"></i>
        <label className="me-5">Dinesh S</label>
      </div>
    </div>
  );
}
