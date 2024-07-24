import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantity } from "../Cart/CartSlice";
import DeleteItem from "../Cart/DeleteItem";
import QuantityControl from "../Cart/QuantityControl";

function MenuItem({ pizza }) {
  const { name, unitPrice, imageUrl, ingredients, soldOut, id } = pizza;
  const currentQuantity = useSelector(getCurrentQuantity(id));

  const dispatch = useDispatch();
  const handleClick = () => {
    let newItem = {
      id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <div className="flex justify-between w-[70%] items-center border-[1px] rounded-lg p-2">
      <div className="flex gap-4 items-center">
        <div className="h-28 w-28">
          <img
            className={`object-contain rounded-lg ${soldOut && "grayscale"}`}
            src={imageUrl}
            alt="d"
          />
        </div>
        <div className="flex flex-col  ">
          <p className="text-lg font-semibold">{name}</p>
          <p className="capitalize">
            <strong>Ingridents: </strong>
            {ingredients.join(" , ")}
          </p>
          <p>${unitPrice}</p>
          <p
            className={`${
              soldOut
                ? "text-red-600 font-semibold"
                : "text-green-600 font-semibold"
            }`}
          >
            {soldOut ? "Out Of Stock" : "Available"}
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-4 ">
        {!soldOut && currentQuantity > 0 && <QuantityControl id={id} />}
        {currentQuantity > 0 ? (
          <DeleteItem id={id} />
        ) : (
          !soldOut && (
            <button
              onClick={handleClick}
              className="bg-blue-400 rounded-md px-4 py-2 h-10 hover:bg-blue-500"
            >
              Add To Cart
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default MenuItem;
