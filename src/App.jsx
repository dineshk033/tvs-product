import React from "react";
import HomeLayout from "./layout";
import { BrowserRouter } from "react-router";
import CustomRoutes from "./routes";
import AuthProvider from "./context/auth";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import GlobalSpinner from "./components/global-spinner";
import ErrorBoundary from "./components/error-boundary";

export default function App() {
  return (
    <div className="container-fluid">
      <Provider store={store}>
        <BrowserRouter>
          {/* <ErrorBoundary> */}
          <AuthProvider>
            <GlobalSpinner>
              <CustomRoutes />
            </GlobalSpinner>
          </AuthProvider>
          {/* </ErrorBoundary> */}
        </BrowserRouter>
      </Provider>
    </div>
  );
}
