import React from "react";
import styles from "./TitleSection.module.css";

const TitleSection = ({ title }) => {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}> {title}</h1>
    </div>
  );
};

export default TitleSection;
