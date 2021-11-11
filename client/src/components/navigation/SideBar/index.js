import React from "react";
import { NavLink } from "react-router-dom";
import RecomandedZone from "./RecomandedZone";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faBroadcastTower, faTh } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>Twitch</span>
      </div>
      <div className={styles.listContainer}>
        <ul>
          <li className={styles.listItems}>
            <NavLink
              className={styles.listItemsLinks}
              to="/"
              activeClassName={styles.activeNav}
            >
              <FontAwesomeIcon icon={faTwitch} className={styles.iconStyle} />
              <span className={styles.itemTitle}> Accueil</span>
            </NavLink>
          </li>

          <li className={styles.listItems}>
            <NavLink
              className={styles.listItemsLinks}
              to="/channels"
              activeClassName={styles.activeNav}
            >
              <FontAwesomeIcon
                icon={faBroadcastTower}
                className={styles.iconStyle}
              />
              <span className={styles.itemTitle}>Chaînes live</span>
            </NavLink>
          </li>
          <li className={styles.listItems}>
            <NavLink
              className={styles.listItemsLinks}
              to="/categories"
              activeClassName={styles.activeNav}
            >
              <FontAwesomeIcon icon={faTh} className={styles.iconStyle} />
              <span className={styles.itemTitle}>Catégories</span>
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
