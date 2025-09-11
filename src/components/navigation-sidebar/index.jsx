import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import useAuthContext from "../../context/auth/authContext";

const MENU = [
  { display: "Dashboard", url: "/" },
  { display: "Accounts", url: "/account" },
  { display: "Scrolls", url: "/scrolls" },
];
export default function NavigationSideBar() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const navigateFN = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    logout(navigateFN);
  };
  return (
    <div className="d-grid gap-2">
      {MENU.map((link) => (
        // <button key={link.display} type="button" className="btn btn-light">
        <NavLink
          to={link.url}
          key={link.display}
          className={({ isActive }) =>
            `${
              isActive
                ? "text-primary fs-5 text-decoration-none btn btn-light"
                : "text-dark text-decoration-none btn btn-light"
            }`
          }
        >
          {link.display}
        </NavLink>
        // </button>
      ))}
      {!user ? (
        <Link
          className="text-dark text-decoration-none btn btn-light"
          to="/login"
        >
          Login
        </Link>
      ) : (
        <button
          className="text-dark text-decoration-none btn btn-light"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
      {/* <button type="button" class="btn btn-light">
        Accounts
      </button>
      <button type="button" class="btn btn-light">
        Login
      </button>
      <button type="button" class="btn btn-light">
        Logout
      </button> */}
    </div>
  );
}
