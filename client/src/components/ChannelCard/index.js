import React from "react";
import UserAvatar from "../UserAvatar";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const ChannelCard = () => {
  return (
    <Link className={styles.categorieCardContainer}>
      <div className={styles.divCardContainer}>
        <img
          className={styles.previewChannel}
          src="https://static-cdn.jtvnw.net/previews-ttv/live_user_jltomy-440x248.jpg"
          alt="stream_preview"
        />
      </div>
      <div className={styles.infoChannel}>
        <UserAvatar
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/69e324f6-fc7d-4131-89ed-227a955637cf-profile_image-50x50.png"
          alt="set"
        />
        <span className={styles.badgeViewer}>42 000 spectateurs</span>
        <div>
          <p>Je stream pour le fun!!</p>
          <p>DannielStream</p>
          <p>Destiny 2</p>
        </div>
      </div>
    </Link>
  );
};

export default ChannelCard;
