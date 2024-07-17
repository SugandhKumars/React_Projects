import React from "react";

function MenuItem({ pizza }) {
  const { name, unitPrice, imageUrl, ingredients, soldOut } = pizza;
  return (
    <>
      <div>
        <p>{name}</p>
        <div>
          <img src={imageUrl} alt="" />
        </div>
        <p>${unitPrice}</p>
        <p>
          <strong>Ingridents:</strong>
          {ingredients.map((ingridents, id) => (
            <span key={id}>{ingridents + "  "}</span>
          ))}
        </p>
        <p>Stock : {soldOut ? "Out Of Stock" : "Available"}</p>
      </div>
    </>
  );
}

export default MenuItem;
