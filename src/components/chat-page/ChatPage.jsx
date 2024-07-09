import React, { useState } from "react";
import styles from "./ChatPage.module.css";
import sentButton from "../../assets/sent.svg";
import { BsEmojiSmile } from "react-icons/bs";

const ChatPage = () => {
  return (
    <>
      <div className={styles.chatPageMain}>
        <div className={styles.chatPage}></div>
        <div className={styles.chatBar}>
          <div className={styles.typingbar}>
            <BsEmojiSmile color="#aaa" />
            <input type="text" className={styles.chatbar} placeholder="Type a message..." />
            <img src={sentButton} alt="Send" className={styles.sendButton} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
