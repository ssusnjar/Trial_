import React from "react";
import styles from "./Usluge.module.css";
import { Link } from "react-router-dom";
import Supetar from "../../../assets/DVDSupetar.png";
import Peljesac from "../../../assets/PeljesacPristup.png"
import Sinj from "../../../assets/SportskaDvoranaSinj.png";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
const Usluge = () => {
  return (
    <div className={styles.usluge}>
      <h1 className={styles.title}> POSLJEDNJI PROJEKTI</h1>
      <div className={styles.main}>
        <div className={styles.column}>
          <img src={Supetar} className={styles.icon}></img>
          <div className={styles.txt}>
            <h3 className={styles.title2}> DVD Supetar</h3>
          </div>
        </div>
        <div className={styles.column}>
          <img src={Peljesac} className={styles.icon}></img>
          <div className={styles.txt}>
            <h3 className={styles.title2}> Pelješac</h3>
          </div>
        </div>
        <div className={styles.column}>
          <img src={Sinj} className={styles.icon}></img>
          <div className={styles.txt}>
            <h3 className={styles.title2}> Sinj</h3>
          </div>
        </div>
      </div>
      <div className={styles.parent}>
        <Link to="/Projekti" onClick={scrollToTop}>
          <button className={styles.button}>SVI PROJEKTI</button>
        </Link>
      </div>
    </div>
  );
};

export default Usluge;
