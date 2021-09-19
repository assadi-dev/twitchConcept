import React from "react";
import CategoryCard from "../CategoryCard";
import styles from "./style.module.css";

const RowCategories = () => {
  return (
    <div className={styles.categoryRowContainer}>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
};

export default RowCategories;
