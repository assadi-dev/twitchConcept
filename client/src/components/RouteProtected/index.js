import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const RouteProtected = ({ children }) => {
  const location = useLocation();
  const authContext = useContext(AuthContext);

  if (!authContext.userAuth.id) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default RouteProtected;
