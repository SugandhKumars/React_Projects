import "../App.css";
import Calculator from "./Calculator";
import Header from "./Header";
import Timer from "./Timer";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Header />
          <Calculator />
          <Timer />
        </div>
      </div>
    </>
  );
}

export default App;
