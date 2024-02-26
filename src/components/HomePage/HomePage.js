import React from "react";
import Naslovna from "./Naslovna/Naslovna";
import Projekti from "./Projekti/Projekti";
import Usluge from "./Usluge/Usluge";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.main}>
      <Naslovna />
      <Projekti />
      <Usluge />
    </div>
  );
};

export default HomePage;
