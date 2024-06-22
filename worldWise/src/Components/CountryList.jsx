import React, { useEffect, useState } from "react";
import Country from "./Country";
import styles from "./CountryList.module.css";

function CountryList() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    async function getCountry() {
      let res = await fetch(`http://localhost:3000/cities`);
      let data = await res.json();
      setCountry(data);
    }
    getCountry();
  }, []);

  return (
    <div className={styles.CountryList}>
      {country?.map((count) => (
        <Country key={count?.id} name={count?.Country} />
      ))}
    </div>
  );
}

export default CountryList;
