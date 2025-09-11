import React from "react";
import useAuthContext from "../../context/auth/authContext";

export default function Header() {
  const { user } = useAuthContext();
  return (
    <div className="bg-dark p-3 w-100 text-white d-flex justify-content-between">
      <h4 className="mb-0">TVS Credit</h4>
      <div>
        <i class="bi bi-bell me-3"></i>
        <i class="bi bi-list-task me-3"></i>
        {user ? (
          <>
            <i class="bi bi-person-circle me-2"></i>
            <label className="me-5">{user?.user}</label>
          </>
        ) : (
          <button className="btn btn-outline-light">Login</button>
        )}
      </div>
    </div>
  );
}
