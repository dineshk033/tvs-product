import { createContext } from "react";
import useAuth from "../../hooks/useAuth";

//crate a context
const AuthContext = createContext();

//create a provider
export default function AuthProvider({ children }) {
  const [user, setUser] = useAuth();

  const login = (form, callback) => {
    if (!form.employeeID && !form.password) {
      //   alert("Field is required");
      callback("Field is required");
      return;
    }
    //make a api to call get token
    if (form.employeeID === "test" && form.password === "test") {
      setUser({ user: "test" });
      localStorage.setItem("token", { user: "test" });
    } else {
      callback("invalid username,password");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
