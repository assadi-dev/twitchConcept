import React from "react";
import styles from "./style.module.css";

const GameCardCategory = () => {
  return (
    <div className={styles.gameCardContainer}>
      <img
        src="https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-285x380.jpg"
        alt="prev_pic"
      />
      <div className={styles.infoGameCard}>
        <p>Valorant</p>
        <p>3000 spectacteurs</p>
      </div>
    </div>
  );
};

export default GameCardCategory;
