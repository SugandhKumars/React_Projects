import React from "react";
import Navbar from "../Components/NavBar";
import Style from "./Pricing.module.css";
import Button from "../Components/Button";
import { NavLink } from "react-router-dom";
function Pricing() {
  return (
    <div className={`main`}>
      <Navbar />
      <article className={Style.artContainer}>
        <div className={Style.left}>
          <p className={Style.large}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className={Style.small}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            enim molestias neque deserunt. Ratione consequatur sit deserunt id
            exercitationem esse fuga ut eius, eos hic facilis tempora
            reiciendis, maxime amet?
          </p>
          <NavLink to="/app">
            <Button> Start Tracking Now</Button>
          </NavLink>
        </div>
        <div className={Style.right}>
          <img
            src="https://images.pexels.com/photos/1500459/pexels-photo-1500459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </article>
    </div>
  );
}

export default Pricing;
