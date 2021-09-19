import React from "react";
import styles from "./style.module.css";
import ChannelCard from "../ChannelCard";

const RowChannel = () => {
  return (
    <div className={styles.channelRowContainer}>
      <ChannelCard />
      <ChannelCard />
      <ChannelCard />
      <ChannelCard />
      <ChannelCard />
    </div>
  );
};

export default RowChannel;
