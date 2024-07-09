import React from "react";
import { IoLogInOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerMain}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>Conversation</div>
        <IoLogInOutline color="red" size={25} />
      </div>
      <div className={styles.headerSearch}>
        <CiSearch color={"#aaa"} size={20} />
        <input type="search" className={styles.searchBar} name="search" placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
