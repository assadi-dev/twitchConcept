import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import styles from "./style.module.css";
import AuthContext from "../../../context/AuthContext";

const Navbar = () => {
  const url = process.env.REACT_APP_HOST;
  const authContext = useContext(AuthContext).userAuth;

  return (
    <div className={styles.navContainer}>
      <SearchBar />
      <div className={styles.leftSide}>
        {!authContext.id ? (
          <a
            href={`${url}/auth/twitch/connect`}
            className={styles.twitchConnect}
          >
            Se connecter
          </a>
        ) : (
          <a href={`${url}/auth/logout`} className={styles.twitchConnect}>
            Deconnexion
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
