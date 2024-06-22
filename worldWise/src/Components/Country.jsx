import React from "react";
import styles from "./Country.module.css";
function Country({ name }) {
  return <div className={styles.country}>{name}</div>;
}

export default Country;
