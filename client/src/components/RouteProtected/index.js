import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RouteProtected = ({ children, logged }) => {
  const location = useLocation();

  if (!logged) {
    alert("you must be logged");
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default RouteProtected;
