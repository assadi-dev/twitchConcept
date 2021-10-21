import React from "react";
import styles from "./style.module.css";

const CategoryCard = ({ slug }) => {
  return (
    <div className={styles.cardContainer}>
      <img
        src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-188x250.jpg"
        alt="fifa_21"
      />
      <div className={styles.infoCategory}>
        <p>League of Legend</p>
        <p>24 563 viewer</p>
      </div>
    </div>
  );
};

export default CategoryCard;
