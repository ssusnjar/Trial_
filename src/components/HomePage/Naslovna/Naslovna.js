import React from "react";
import styles from "./Naslovna.module.css";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Naslovna = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.text}>
          <p className={styles.title}>
            INŽENJERSTVO I S NJIM POVEZANO TEHNIČKO SAVJETOVANJE
          </p>
          <p className={styles.title2}>
            ISPITIVANJE GRAĐEVINSKIH MATERIJALA I STRUČNI NADZOR
          </p>
          <div className={styles.buttons}>
            <Link to="/Kontakt" onClick={scrollToTop}>
              <button className={styles.button1}>KONTAKT</button>
            </Link>
            <Link to="/oNama" onClick={scrollToTop}>
              <button className={styles.button2}>O NAMA</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.numbers}>
        <div className={styles.projectsNumber}>
          <p className={styles.num}>185</p>
          <p className={styles.txt}>Projekata</p>
        </div>
        <div className={styles.yearNumber}>
          <p className={styles.num}>20+</p>
          <p className={styles.txt}>Godina iskustva</p>
        </div>
      </div>
    </div>
  );
};

export default Naslovna;
