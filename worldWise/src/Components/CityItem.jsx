import React from "react";
import styles from "./CityItem.module.css";
import { Link, useParams } from "react-router-dom";
function CityItem({ city, emoji, date, message, id, position }) {
  return (
    <Link
      to={`${id}?lat=${position.lat}&lang=${position.lang}`}
      className={`${styles.cityItem} `}
    >
      <div>
        <p className={styles.name}>
          {city} {emoji}
        </p>
      </div>

      <div className={styles.date}>
        {date} <p>X</p>
      </div>
    </Link>
  );
}

export default CityItem;
