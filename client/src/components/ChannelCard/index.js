import React from "react";
import UserAvatar from "../UserAvatar";
import styles from "./style.module.css";

const ChannelCard = () => {
  return (
    <div className={styles.categorieCardContainer}>
      <img
        src="https://static-cdn.jtvnw.net/previews-ttv/live_user_jltomy-440x248.jpg"
        alt="stream_preview"
      />
      <div className={styles.infoChannel}>
        <UserAvatar
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/69e324f6-fc7d-4131-89ed-227a955637cf-profile_image-50x50.png"
          alt="set"
        />
        <div>
          <p>Je stream pour le fun!!</p>
          <p>DannielStream</p>
          <p>Destiny 2</p>
        </div>
      </div>
      <span className={styles.badgeViewer}>42 000 spectateurs</span>
    </div>
  );
};

export default ChannelCard;
