import React from "react";
import About from "./About/About";
import styles from "./Kontakt.module.css";
import Section from "../TitleSection/TitleSection";

const Kontakt = () => {
  return (
    <div>
      <Section title="Kontakt" />
      <div className={styles.kontakt}>
        <p className={styles.location}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.3547637379247!2d16.48882807599462!3d43.51579427110902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355f6b3644e52d%3A0x5dccac0d1bbddb63!2sTrial%20d.o.o.!5e0!3m2!1shr!2shr!4v1708714079947!5m2!1shr!2shr" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      
        </p>
        <hr className={styles.line}></hr>
        <About />
        <p>
          Sve Vaše upite, pohvale, pritužbe ili upite vezane za način podnošenja i rješavanja pritužbi<br />
          možete dostaviti e-mailom na: <a href="mailto:info@trial.hr">info@trial.hr</a>.
        </p>
      </div>
    </div>
  );
};

export default Kontakt;
