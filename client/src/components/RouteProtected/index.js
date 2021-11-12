import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const RouteProtected = ({ children, logged, path }) => {
  const location = useLocation();
  const authContext = useContext(AuthContext);

  //let logged = authContext;

  if (!logged) {
    return <Navigate to="/" state={{ path }} replace />;
  }

  return children;
};

export default RouteProtected;
