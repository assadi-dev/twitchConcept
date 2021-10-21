import React from "react";
import GameCardCategory from "../GameCardCategory";
import styles from "./style.module.css";

const RowCategories = () => {
  return (
    <div className={styles.categoryRowContainer}>
      <GameCardCategory />
      <GameCardCategory />
      <GameCardCategory />
      <GameCardCategory />
      <GameCardCategory />
      <GameCardCategory />
      <GameCardCategory />
    </div>
  );
};

export default RowCategories;
