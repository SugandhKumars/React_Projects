import React from "react";
import Style from "./Article.module.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";
function Article() {
  return (
    <section className={Style.articleContainer}>
      <div className={Style.art1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        fugit.
      </div>
      <div className={Style.art2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        possimus provident sit, repellat enim atque natus vitae eveniet ipsum
        ea! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
        voluptates.
      </div>
      <NavLink to="/app">
        <Button> Start Tracking Now</Button>
      </NavLink>
    </section>
  );
}

export default Article;
