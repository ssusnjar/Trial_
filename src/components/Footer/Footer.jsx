import React from "react";
import styles from "./Footer.module.css";
import Logo1 from '../../../src/assets/Logo.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.column}>
        <img src={Logo1} className={styles.Logo}></img>
      </div>
      <div className={styles.column}>
        <h3 className={styles.title}>ADRESA I SJEDIŠTE</h3>
        <p className={styles.title2}>Sjedište:</p>
        <p className={styles.text}>Ulica Velimira Terzića 17</p>
        <p className={styles.text}>21 000 Split</p>
        <p className={styles.title2}>Laboratorij:</p>
        <p className={styles.text}>Sv Liberana 48</p>
        <p className={styles.text}>21 000 Split</p>
      </div>
      <div className={styles.column}>
        <h3 className={styles.title}>KONTAKT </h3>
        <p className={styles.title2}>TRIAL d.o.o.</p>
        <p className={styles.text}>OIB: 64026545644</p>
        <p className={styles.text}>Mail: info@trial.hr</p>
        <p className={styles.text}>Telefon: +385 97 708 5929</p>
      </div>
    </div>
  );
};

export default Footer;
