import { AuthContext } from "../Contexts/AuthContextProvider";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

function PrivateRoutes({ children }) {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoutes;
