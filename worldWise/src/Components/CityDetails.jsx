import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./CityDetails.module.css";
function CityDetails() {
  const [city, setCity] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getCity() {
      let res = await fetch(`http://localhost:3000/cities`);
      let data = await res.json();
      setCity(data);
    }
    getCity();
  }, []);
  const { id } = useParams();
  let selectedCity = city?.filter((citi) => citi?.id === id);
  console.log(selectedCity);

  return (
    <>
      <div className={styles.CityDetails}>
        <p className={styles.title}>CITY NAME</p>
        <p className={styles.city}>{selectedCity[0]?.name}</p>
        <p className={styles.title}>You went On</p>
        <p className={styles.date}>{selectedCity[0]?.date}</p>
        <p className={styles.title}>YOUR NOTES</p>
        <p className={styles.notes}>{selectedCity[0]?.title}</p>
        <button onClick={() => navigate(-1)} className={styles.btn}>
          ⬅ Back
        </button>
      </div>
    </>
  );
}

export default CityDetails;
