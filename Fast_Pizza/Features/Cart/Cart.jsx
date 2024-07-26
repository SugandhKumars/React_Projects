import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeItem } from "./CartSlice";
import DeleteItem from "./DeleteItem";
import QuantityControl from "./QuantityControl";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.userName);

  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-[70%] mx-auto mt-24">
      <Link to="/menu" className="text-blue-400  ">
        ⬅ Back to Menu
      </Link>
      <p className="text-xl font-medium mb-6 mt-4">Your Cart , {user}</p>
      {cart.cart.length > 0 ? (
        cart.cart?.map((item) => (
          <div
            key={item?.id}
            className="flex justify-between items-center border-b-[2px] pb-2 pt-2 "
          >
            <p>{item?.name}</p>
            <div className="flex gap-5 items-center">
              <p>${item?.totalPrice}</p>
              <QuantityControl id={item.id} />
              <DeleteItem id={item.id}>Delete</DeleteItem>
            </div>
          </div>
        ))
      ) : (
        <div className=" font-bold text-red-500 text-xl ">
          Your Cart is Empty , Please Add some items...
        </div>
      )}
      {cart.cart.length > 0 && (
        <div className="mt-5 flex gap-5">
          <Link to="/order/new">
            <button className="px-3 py-2 font-medium rounded-2xl bg-blue-400 cursor-pointer hover:bg-blue-600 hover:text-zinc-100">
              Order Pizzas
            </button>
          </Link>
          <button
            className="px-3 py-2 font-medium rounded-2xl bg-blue-400 cursor-pointer hover:bg-blue-600 hover:text-zinc-100"
            onClick={clear}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
