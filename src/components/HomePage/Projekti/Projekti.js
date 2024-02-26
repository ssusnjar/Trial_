import React from "react";
import styles from "./Projekti.module.css";
import icon from "../../../assets/icon.svg";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Projekti = () => {
  return (
    <div className={styles.usluge}>
      <h1 className={styles.title}> NEKE OD USLUGA</h1>
      <div className={styles.main}>
        <div className={styles.column}>
          <img src={icon} className={styles.icon}></img>
          <div className={styles.txt}>
            <p className={styles.title2}>
              Tehničko-tehnološke usluge kod proizvodnje betona
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img src={icon} className={styles.icon}></img>
          <div className={styles.txt}>
            <p className={styles.title2}>
              {" "}
              Laboratorijsko i terensko ispitivanje građevinskih materijala
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img src={icon} className={styles.icon}></img>
          <div className={styles.txt}>
            <p className={styles.title2}>
              Projektiranje i nadzor geotehničkih konstrukcija
            </p>
          </div>
        </div>
      </div>
      <div className={styles.parent}>
        <Link to="/Usluge" onClick={scrollToTop}>
          <button className={styles.button}>SVE USLUGE</button>
        </Link>
      </div>
    </div>
  );
};

export default Projekti;
