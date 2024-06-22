import React from "react";
import styles from "./CityItem.module.css";
function CityItem({ city, emoji, date, message }) {
  return (
    <div className={styles.cityItem}>
      <div>
        <p className={styles.name}>
          {city} {emoji}
        </p>

        <p className={styles.message}>{message}</p>
      </div>

      <div className={styles.date}>
        {date} <p>X</p>
      </div>
    </div>
  );
}

export default CityItem;
