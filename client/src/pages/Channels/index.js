import React from "react";
import ChannelCard from "../../components/ChannelCard";
import styles from "./style.module.css";

const Channels = () => {
  return (
    <div>
      <h1>Chaines</h1>
      <div className={styles.rowChannels}>
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
      </div>
    </div>
  );
};

export default Channels;
