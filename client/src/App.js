import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import SideBar from "./components/navigation/SideBar";
import RouteProtected from "./components/RouteProtected";
import routes from "./utils/routes";
import { useDispatch, useSelectore } from "react-redux";
import Home from "./pages/Home";
import axios from "axios";
import { setStorageKey, getStorageKey, storageKey } from "./utils/authUtil";
import AuthContext from "./context/AuthContext";

const App = () => {
  const url_connect = "http://localhost:6500/auth/login/success";
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      await fetch(url_connect, {
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          let userAuth = resObject.user;
          let from = location.pathname;
          //setStorageKey("logged");
          setUser(userAuth);
          setLogged(true);
          console.log(from);
          // navigate(from, { replace: true });
        })
        .catch((err) => {
          //console.log(err);
        });
    };
    getUser();
    const getKey = async () => {
      const key = await getStorageKey(storageKey);
      console.log(key);
      if (key) {
        setLogged(true);
      }
    };
    //getKey();
  }, []);
  const contextValue = { userAuth: user, setUserAuth: setUser };

  return (
    <AuthContext.Provider value={contextValue}>
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
                  <RouteProtected logged={logged} path={route.path}>
                    {route.component}
                  </RouteProtected>
                }
              />
            ))}
          </Routes>
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
