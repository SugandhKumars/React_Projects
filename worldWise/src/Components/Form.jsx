import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import useSearchUrl from "../hooks/useSearchUrl";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=22&longitude=23
function Form() {
  const Navigate = useNavigate();
  const [lat, lang] = useSearchUrl();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [note, setNotes] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (!lang || !lat) return;
    const getCityData = async () => {
      try {
        setError("");
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lang}`
        );
        const data = await res.json();
        if (!data.countryCode)
          throw new Error(
            "It doesn't seems to be a city .Click somewhere else 😉"
          );

        setCity(data.city || data.locality || "");
        setCountry(data.countryName);
      } catch (error) {
        setError(error.message);
      }
    };
    getCityData();
  }, [lat, lang]);

  if (error) {
    return <div>{error}</div>;
  }
  if (!lang || !lat) {
    return <div>😎 Click on the Map somewhere</div>;
  }
  const handleSubmit = () => {
    if (!city || !date) return;
    let newCity = {
      name: city,
      Country: country,
      date: date,
      title: note,
      position: { lat, lang },
    };
    AddToCity(newCity);
    Navigate("/app/cities");
  };
  async function AddToCity(newCity) {
    const res = await fetch("http://localhost:3000/cities", {
      method: "POST",
      body: JSON.stringify(newCity),
      headers: {
        "Content-Type": "application.json",
      },
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <div className={styles.form}>
      <p className={styles.label}>City Name</p>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <p className={styles.label}>When did you go to {city}?</p>
      <DatePicker
        className={styles.date}
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="dd/MM/yyyy"
      />
      <p className={styles.label}>Notes About your trip to</p>
      <textarea
        type="text"
        className={styles.notes}
        value={note}
        onChange={(e) => setNotes(e.target.value)}
      />
      <div className={styles.btns}>
        <button className={styles.btn1} onClick={handleSubmit}>
          ADD
        </button>
        <button className={styles.btn2} onClick={() => Navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Form;
