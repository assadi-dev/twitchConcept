import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CategoryCard from "../../components/CategoryCard";
import RowCaroussel from "../../components/RowCarousel";
import RowCategories from "../../components/RowCategories";
import RowChannel from "../../components/RowChannels";
import { getCookies } from "../../utils/services";
import styles from "./style.module.css";

const Home = () => {
  const authUser = useSelector((state) => state.UserReducer);

  useEffect(() => {
    getCookies();
  }, []);

  return (
    <div>
      <section className={styles.section}>
        <p>
          <span>Chaines </span> qui pourrais vous interessé
        </p>

        <RowCaroussel />
      </section>
      <section className={styles.section}>
        <p>
          Les <span>Catégories </span> qui pourrais vous interessé
        </p>
        <RowCategories />
      </section>
      <section className={styles.section}>
        <p>
          Les chaines <span>Catégories 1 </span> qui pourrais vous interessé
        </p>

        <RowChannel />
      </section>
      <section className={styles.section}>
        <p>
          Les chaines <span>Catégories 2 </span> qui pourrais vous interessé
        </p>
        <RowChannel />
      </section>
      <section className={styles.section}>
        <p>
          les chaines <span>Catégories 3 </span> qui pourrais vous interessé
        </p>
        <RowChannel />
      </section>
    </div>
  );
};

export default Home;
