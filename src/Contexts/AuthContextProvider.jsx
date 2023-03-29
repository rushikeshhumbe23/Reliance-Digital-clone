import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const Login = (val) => {
    setIsAuth(true);
    setToken(val);
  };

  const Logout = () => {
    setIsAuth(false);
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ isAuth, Login, Logout, token }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
