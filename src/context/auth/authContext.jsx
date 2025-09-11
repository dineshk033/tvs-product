import React, { useContext } from "react";
import { AuthContext } from ".";

export default function useAuthContext() {
  return useContext(AuthContext);
}
