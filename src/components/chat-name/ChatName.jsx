import React from "react";
import { CgProfile } from "react-icons/cg";
import styles from "./ChatName.module.css";

const ChatName = ({ name }) => {
  return (
    <div className={styles.chatNameMain}>
      <div className={styles.chatProfile}>
        <CgProfile />
      </div>
      <div className={styles.chatName}>{name}</div>
    </div>
  );
};

export default ChatName;
