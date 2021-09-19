import React from "react";
import styles from "./style.module.css";

const StreamerCard = () => {
  return (
    <div className={styles.cardContainer}>
      <img
        src="https://static-cdn.jtvnw.net/previews-ttv/live_user_etoiles-440x248.jpg"
        alt="preview-img"
      />
    </div>
  );
};

export default StreamerCard;
