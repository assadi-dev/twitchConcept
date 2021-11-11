import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import SideBar from "./components/navigation/SideBar";
import RouteProtected from "./components/RouteProtected";
import routes from "./utils/routes";
import { useDispatch, useSelectore } from "react-redux";
import Home from "./pages/Home";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);

  return (
    <div className="wrapper">
      <SideBar />
      <div className="wrapperContent">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <RouteProtected logged={true}>
                  {" "}
                  {route.component}{" "}
                </RouteProtected>
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default App;
