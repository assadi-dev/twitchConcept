import React from "react";
import { NavLink } from "react-router-dom";
import RecomandedZone from "./RecomandedZone";
import styles from "./style.module.css";

const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>Twitch</span>
      </div>
      <div className={styles.listContainer}>
        <ul>
          <li className={styles.listItems}>
            <NavLink className={styles.listItemsLinks} to="/">
              Accueil
            </NavLink>
          </li>
          <li className={styles.listItems}>
            <NavLink
              className={styles.listItemsLinks}
              to="/channels"
              activeClassName={styles.activeNav}
            >
              Chaînes live
            </NavLink>
          </li>
          <li className={styles.listItems}>
            <NavLink
              className={styles.listItemsLinks}
              to="/categories"
              activeClassName={styles.activeNav}
            >
              Catégories
            </NavLink>
          </li>
        </ul>
        <hr className={styles.separator} />
        <RecomandedZone />
      </div>
    </div>
  );
};

export default SideBar;
