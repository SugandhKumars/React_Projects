import React from "react";
import {
  decreaseItemQuantity,
  getCurrentQuantity,
  increaseItemQuantity,
} from "./CartSlice";
import { useDispatch, useSelector } from "react-redux";

function QuantityControl({ id }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getCurrentQuantity(id));
  return (
    <div className="flex items-center gap-2 ">
      <button
        onClick={() => dispatch(decreaseItemQuantity(id))}
        className="px-4 active:bg-blue-600 py-2 bg-blue-500 rounded-full flex items-center text-white"
      >
        -
      </button>
      <span>{quantity}</span>

      <button
        onClick={() => dispatch(increaseItemQuantity(id))}
        className="px-4 active:bg-blue-600 py-2 bg-blue-500 flex items-center rounded-full text-white"
      >
        +
      </button>
    </div>
  );
}

export default QuantityControl;
