import React from "react";
import Navbar from "../Components/NavBar";
import Style from "./Product.module.css";
import Button from "../Components/Button";
import { NavLink } from "react-router-dom";
function Product() {
  return (
    <div className="main">
      <Navbar />
      <article className={Style.artContainer}>
        <div className={Style.right}>
          <img
            src="https://images.pexels.com/photos/1093087/pexels-photo-1093087.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className={Style.left}>
          <p className={Style.large}>About WorldWise</p>
          <p className={Style.small}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ipsum reiciendis eaque rerum saepe amet aliquid, nemo recusandae
              vero, consequuntur autem repellat fuga veniam vitae iure corporis.
              Iure, est quos?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              enim molestias neque deserunt. Ratione consequatur sit deserunt id
              exercitationem esse fuga ut eius, eos hic facilis tempora
              reiciendis, maxime amet?
            </p>
          </p>
          <NavLink to="/app">
            <Button> Start Tracking Now</Button>
          </NavLink>
        </div>
      </article>
    </div>
  );
}

export default Product;
