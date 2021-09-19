import React from "react";
import styles from "./style.module.css";
import GameCardCategory from "../../components/GameCardCategory";

const Categories = () => {
  return (
    <div>
      <h1>Categories</h1>
      <div className={styles.rowCategories}>
        <GameCardCategory />
        <GameCardCategory />
        <GameCardCategory />
        <GameCardCategory />
        <GameCardCategory />
        <GameCardCategory />
        <GameCardCategory />
        <GameCardCategory />
        <GameCardCategory />
      </div>
    </div>
  );
};

export default Categories;
