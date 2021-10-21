import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const GameCardCategory = ({ slug }) => {
  return (
    <Link to={`/categorie/${slug}`} className={styles.gameCardContainer}>
      <div className={styles.divCardContainer}>
        <img
          src="https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-285x380.jpg"
          alt="prev_pic"
        />
      </div>
      <div className={styles.infoGameCard}>
        <p>Valorant</p>
        <p>3000 spectacteurs</p>
      </div>
    </Link>
  );
};

export default GameCardCategory;
