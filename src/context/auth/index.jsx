import { createContext, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

//crate a context
const AuthContext = createContext();

//create a provider
export default function AuthProvider({ children }) {
  const [user, setUser] = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const login = async (form, callback, success) => {
    if (!form.employeeID && !form.password) {
      //   alert("Field is required");
      callback("Field is required");
      return;
    }
    //make a api to call get token
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://idam.tvscredit.com/CIDSaas/default/api/v2/authenticate",
        form
      );
      if (res.status === 200) {
        setIsLoading(false);
        localStorage.setItem("token", JSON.stringify({ user: "test" }));
        return success();
      }
      setIsLoading(false);
      callback("Invalid UserName/pasword");
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
      callback("something went wrong");
    }
    // if (form.employeeID === "test" && form.password === "test") {
    //   setUser({ user: "test" });
    //   localStorage.setItem("token", JSON.stringify({ user: "test" }));
    //   success();
    // } else {
    //   callback("invalid username,password");
    // }
  };

  const logout = (callback) => {
    setUser(null);
    localStorage.removeItem("token");
    callback();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
