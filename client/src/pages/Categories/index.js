import React from "react";
import styles from "./style.module.css";
import GameCardCategory from "../../components/GameCardCategory";

const Categories = () => {
  return (
    <div>
      <h1>Categories</h1>
      <div className={styles.rowCategories}>
        <GameCardCategory slug={"FIFA 22"} />
        <GameCardCategory slug={"Destiny 2"} />
        <GameCardCategory slug={"Disscussion"} />
        <GameCardCategory slug={"League of Legend"} />
        <GameCardCategory slug={"Valorant"} />
        <GameCardCategory slug={"Genshin impact"} />
        <GameCardCategory slug={"GTA V"} />
        <GameCardCategory slug={"Among us"} />
        <GameCardCategory slug={"Fortnite"} />
      </div>
    </div>
  );
};

export default Categories;
