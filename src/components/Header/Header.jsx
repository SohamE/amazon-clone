import React from "react";
import styles from "./Header.module.css";
import amazonLogo from "../../assets/amazon_logo.png";

const Header = () => {
  console.log(styles);
  return (
    <div className={styles.container}>
      <div className={styles.headerLogo}>
        <img src={amazonLogo} />
      </div>
      <div className={styles.headerOptionAddress}>
        <span>Hello</span>
        <span>Select your address</span>
      </div>
    </div>
  );
};

export default Header;
