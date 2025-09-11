import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "../pages/dashboard";
import HomeLayout from "../layout";
import Login from "../pages/login";
import Account from "../pages/account";

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index Component={Dashboard} />
        <Route path="/account" Component={Account} />
      </Route>
      <Route path="/login" Component={Login} />
    </Routes>
  );
}
