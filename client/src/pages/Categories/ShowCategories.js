import React from "react";
import styles from "./style.module.css";
import { useParams } from "react-router-dom";
import ChannelCard from "../../components/ChannelCard";

const ShowCategories = () => {
  const { slug } = useParams();
  return (
    <main>
      <section className={styles.categoriesPresentation}>
        <div className={styles.previewCategorie}>
          <figure className={styles.showPreviewContainer}>
            <img
              src="https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2022-144x192.jpg"
              alt={slug}
            />
          </figure>
          <div className={styles.infoShowCategory}>
            <h2 className={styles.slugTitle}>{slug}</h2>
          </div>
        </div>
      </section>
      <section className={styles.channelsZone}>
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
      </section>
    </main>
  );
};

export default ShowCategories;
