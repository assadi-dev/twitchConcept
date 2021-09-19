import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "../../components/navigation/SideBar";
import RouteProtected from "../../components/RouteProtected";
import routes from "../../utils/routes";
import Categories from "../Categories";
import Home from "../Home";

const Main = () => {
  return (
    <Router>
      <div className="wrapper">
        <SideBar />
        <Switch>
          <div className="wrapperContent">
            {routes.map((route, index) => (
              <RouteProtected
                key={index}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </div>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
