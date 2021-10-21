import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import styles from "./style.module.css";
import StreamerCard from "../StreamerCard";
const RowCaroussel = () => {
  const ref = useRef();

  useEffect(() => {
    const flkty = new Flickity(ref.current, {
      cellAlign: "left",
      pageDots: false,
      contain: true,
      autoPlay: 3500,
      wrapAround: true,
    });

    return () => {
      flkty.destroy();
    };
  }, []);
  return (
    <>
      <div ref={ref} className={styles.mainCarousel}>
        <StreamerCard />
        <StreamerCard />
        <StreamerCard />
        <StreamerCard />
        <StreamerCard />
        <StreamerCard />
        <StreamerCard />
        <StreamerCard />
      </div>
    </>
  );
};

export default RowCaroussel;
