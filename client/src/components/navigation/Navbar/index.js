import React from "react";
import SearchBar from "./SearchBar";
import styles from "./style.module.css";

const Navbar = () => {
  const url = process.env.REACT_APP_HOST;

  return (
    <div className={styles.navContainer}>
      <SearchBar />
      <div className={styles.leftSide}>
        <a href={`${url}/auth/twitch/connect`} className={styles.twitchConnect}>
          Se connecter
        </a>
      </div>
    </div>
  );
};

export default Navbar;
