import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "../pages/dashboard";
import HomeLayout from "../layout";
import Login from "../pages/login";
import Account from "../pages/account";
import PrivateRoute from "../components/private-route";

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="/login" Component={Login} />
    </Routes>
  );
}
