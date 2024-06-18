import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [positon, setPosition] = useState({});

  const { lan, lat } = positon;

  let location = navigator.geolocation.getCurrentPosition(sucess, error);

  function sucess(position) {
    let lan = position.coords.latitude;
    let long = position.coords.longitude;
  }

  function error() {
    console.log("something Went Wrong");
  }

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>get Location</button>
        <p>My Location : </p>
        <p>Location {count}</p>
      </div>
    </>
  );
}

export default App;
