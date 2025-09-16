import React from "react";
import HomeLayout from "./layout";
import { BrowserRouter } from "react-router";
import CustomRoutes from "./routes";
import AuthProvider from "./context/auth";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <div className="container-fluid">
      <Provider store={store}>
        <BrowserRouter>
          <AuthProvider>
            <CustomRoutes />
          </AuthProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
