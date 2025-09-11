import React, { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);

  //called only when mounts
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setUser(token);
    } else {
      setUser(false);
    }
  }, []);

  return [user, setUser];
}
