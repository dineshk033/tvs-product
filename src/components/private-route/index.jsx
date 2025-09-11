import React from "react";
import { Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function PrivateRoute({ children }) {
  //custom hook to validate userRole or token
  const [user] = useAuth();
  if (user === null) {
    return <div>checking...</div>;
  }
  return user ? children : <Navigate to="/login" />;
}
