import React, { useContext, useEffect, useState } from "react";
import CityItem from "./CityItem";
import styles from "./CItyList.module.css";
import { CityContext } from "./App";

function CityList() {
  const { cities, setCities } = useContext(CityContext);

  // const [city, setCity] = useState([]);

  // useEffect(() => {
  //   async function getCity() {
  //     let res = await fetch(`http://localhost:3000/cities`);
  //     let data = await res.json();
  //     setCities(data);
  //   }
  //   getCity();
  // }, []);
  async function handleRemove(e, id) {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/cities/${id}`, {
      method: "DELETE",
    });
    const filterCities = cities?.filter((citi) => citi?.id != id);
    setCities(filterCities);
  }

  return (
    <div className={styles.CityList}>
      {cities?.map((detail) => (
        <CityItem
          key={detail?.id}
          id={detail?.id}
          city={detail?.name}
          emoji={detail?.emoji}
          date={detail?.date}
          message={detail?.title}
          position={detail?.position}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
}

export default CityList;
