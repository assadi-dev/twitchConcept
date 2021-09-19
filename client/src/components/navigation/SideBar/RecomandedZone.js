import React from "react";
import UserAvatar from "../../UserAvatar";
import ListItems from "./ListItems";
import styles from "./style.module.css";

const RecomandedZone = () => {
  return (
    <div className={styles.recomandWrapper}>
      <ul>
        <li>
          <ListItems />
        </li>
        <li>
          <ListItems />
        </li>
        <li>
          <ListItems />
        </li>
        <li>
          <ListItems />
        </li>
        <li>
          <ListItems />
        </li>
        <li>
          <ListItems />
        </li>
      </ul>
    </div>
  );
};

export default RecomandedZone;
