import React, { useEffect, useState } from "react";
import CityItem from "./CityItem";
import styles from "./CItyList.module.css";

function CityList() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    async function getCity() {
      let res = await fetch(`http://localhost:3000/cities`);
      let data = await res.json();
      setCity(data);
    }
    getCity();
  }, []);

  return (
    <div className={styles.CityList}>
      {city?.map((detail) => (
        <CityItem
          key={detail?.id}
          city={detail?.name}
          emoji={detail?.emoji}
          date={detail?.date}
          message={detail?.title}
        />
      ))}
    </div>
  );
}

export default CityList;
