import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);
  let totalQuantity = cart?.reduce((sum, item) => sum + item.quantity, 0);
  let totalPrice = cart?.reduce((sum, item) => sum + item.totalPrice, 0);

  //   let Quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  //   console.log(Quantity);
  if (cart.length === 0) return <></>;
  return (
    <div className="flex justify-between right-28 top-0 z-50 fixed bg-orange-800 rounded-lg text-white font-medium h-16 items-center px-6 mt-2 ">
      <p>
        <span className="px-4">{totalQuantity} Pizzas</span>
        <span className="px-2">${totalPrice}</span>
      </p>
      <Link
        className="text-blue-400 hover:text-blue-500 hover:underline"
        to={"/cart"}
      >
        OPEN CART
      </Link>
    </div>
  );
}

export default CartOverview;
