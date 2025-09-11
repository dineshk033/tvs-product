import React, { useState } from "react";
import useAuthContext from "../context/auth/authContext";

export default function Login() {
  //get from context
  const { login } = useAuthContext();
  //form state
  const [form, setForm] = useState({ employeeID: "", password: "" });

  const [error, setError] = useState(null);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const errorMessage = (arg) => {
    setError(arg);
  };
  //form Submission
  const handleSubmit = (e) => {
    //to stop default behavior
    e.preventDefault();
    console.log(form);
    setError(null);
    login(form, errorMessage);
  };
  return (
    <div
      className="row justify-content-center align-items-center "
      style={{ height: "95vh" }}
    >
      <div className="col-5">
        <div className="card p-4">
          <h4 className="fs-4 text-primary text-center">
            TVS <span className="text-success">CREDIT</span>
          </h4>
          <form onSubmit={handleSubmit} noValidate>
            <label className="fw-bold mb-1">Employee ID</label>
            <input
              type="text"
              className="form-control mb-4"
              name="employeeID"
              value={form.employeeID}
              onChange={handleChange}
            />
            <label className="fw-bold mb-1">Password</label>
            <input
              type="password"
              className="form-control mb-4"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary w-100 mb-4">
              Signin
            </button>
            {error && <small className="text-danger">{error}</small>}
          </form>
          <p className="text-center">
            <a className="text-decoration-none text-primary">Forget Password</a>
          </p>
        </div>
      </div>
    </div>
  );
}
