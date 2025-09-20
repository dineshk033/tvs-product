import React from "react";
import Header from "../components/header";
import logo from "../assets/react.svg";
import NavigationSideBar from "../components/navigation-sidebar";
import { Outlet } from "react-router";
import ErrorBoundary from "../components/error-boundary";
export default function HomeLayout() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-3 col-md-2 p-3" style={{ height: "80vh" }}>
          <h4 className="fs-5 my-3">
            <img src={logo} alt="Logo" className="me-2" height={20} />
            TVS Credit
          </h4>
          <NavigationSideBar />
        </div>
        <div className="col-9 col-md-10 bg-light">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}
