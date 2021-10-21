import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";
import SideBar from "../../components/navigation/SideBar";
import RouteProtected from "../../components/RouteProtected";
import routes from "../../utils/routes";
import { useDispatch, useSelectore } from "react-redux";
import { getTopGames } from "../../redux/actions/GameActions";
import { get_token_user } from "../../redux/actions/UserActions";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return (
    <Router>
      <div className="wrapper">
        <SideBar />
        <div className="wrapperContent">
          <Navbar />
          <Switch>
            {routes.map((route, index) => (
              <RouteProtected
                key={index}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Main;
