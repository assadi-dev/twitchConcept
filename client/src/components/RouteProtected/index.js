import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const RouteProtected = ({ children, logged }) => {
  const location = useLocation();
  const authContext = useContext(AuthContext);

  //let logged = authContext;

  if (!logged) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RouteProtected;
