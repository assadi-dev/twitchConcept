import React from "react";
import GameCardCategory from "../GameCardCategory";
import styles from "./style.module.css";

const RowCategories = () => {
  return (
    <div className={styles.categoryRowContainer}>
      <GameCardCategory slug={"FIFA 22"} />{" "}
      <GameCardCategory slug={"Destiny 2"} />{" "}
      <GameCardCategory slug={"Disscussion"} />{" "}
      <GameCardCategory slug={"FIFA 22"} />{" "}
      <GameCardCategory slug={"FIFA 22"} />{" "}
      <GameCardCategory slug={"FIFA 22"} />{" "}
      <GameCardCategory slug={"FIFA 22"} />{" "}
    </div>
  );
};

export default RowCategories;
