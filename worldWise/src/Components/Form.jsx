import styles from "./Form.module.css";
function Form() {
  return (
    <div className={styles.form}>
      <p className={styles.cityName}>City Name</p>
      <input type="text" />
    </div>
  );
}

export default Form;
