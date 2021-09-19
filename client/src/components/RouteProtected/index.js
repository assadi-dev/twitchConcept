import React from "react";
import { Redirect, Route } from "react-router-dom";

const RouteProtected = ({
  component: Component,
  path,
  isPrivate,
  exact,
  ...rest
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => <Component {...props} />}
      {...rest}
    />
  );
};

export default RouteProtected;
