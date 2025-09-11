import React from "react";
import HomeLayout from "./layout";
import { BrowserRouter } from "react-router";
import CustomRoutes from "./routes";
import AuthProvider from "./context/auth";

export default function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <AuthProvider>
          <CustomRoutes />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
