import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "./CartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div
      className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 font-medium cursor-pointer"
      onClick={() => handleDelete(id)}
    >
      Delete
    </div>
  );
}

export default DeleteItem;
