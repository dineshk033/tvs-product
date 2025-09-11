import React from "react";
import HomeLayout from "./layout";
import { BrowserRouter } from "react-router";
import CustomRoutes from "./routes";

export default function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </div>
  );
}
