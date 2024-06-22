import React from "react";
import Navbar from "../Components/NavBar";
import Style from "./Home.module.css";
import Article from "../Components/Article";

function Home() {
  return (
    <div className={`${Style.Home} main`}>
      <Navbar />
      <Article />
    </div>
  );
}

export default Home;
