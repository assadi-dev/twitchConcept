import React from "react";
import UserAvatar from "../../UserAvatar";
import styles from "./style.module.css";

const ListItems = () => {
  return (
    <div className={styles.itemContainer}>
      <UserAvatar
        src="https://img-4.linternaute.com/pTBYzk_5_X2BuV3u4HU5XNk-yYs=/1240x/51ad4d277ac94d3b864f990f300ed5ee/ccmcms-linternaute/185351.jpeg"
        alt="User_picture"
      />
      <div className={styles.streamDetail}>
        <p>Acerom 488</p>
        <p>1458 viewer</p>
        <p>FIFA 21</p>
      </div>
    </div>
  );
};

export default ListItems;
