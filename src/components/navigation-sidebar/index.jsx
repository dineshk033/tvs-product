import React from "react";
import { NavLink } from "react-router";

const MENU = [
  { display: "Dashboard", url: "/" },
  { display: "Accounts", url: "/account" },
  { display: "Login", url: "/login" },
];
export default function NavigationSideBar() {
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
