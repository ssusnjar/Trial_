import React from "react";
import styles from "./Article.module.css";

const Article = ({ image, title, description }) => {
  return (
    <div className={styles.article}>
      <img src={image} className={styles.image}></img>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Article;
