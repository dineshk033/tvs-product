import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function PrivateRoute({ children }) {
  //custom hook to validate userRole or token
  const location = useLocation();
  console.log(location);
  const [user] = useAuth();
  if (user === null) {
    return <div>checking...</div>;
  }
  return user ? (
    children
  ) : (
    <Navigate to="/login" state={{ redirectURL: location.pathname }} />
  );
}
