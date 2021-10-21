import React from "react";
import UserAvatar from "../../UserAvatar";
import styles from "./style.module.css";

const ListItems = () => {
  return (
    <div className={styles.itemContainer}>
      <UserAvatar
        src="https://static-cdn.jtvnw.net/jtv_user_pictures/c29eaa98-b316-4934-9910-502b2f027737-profile_image-70x70.png"
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
