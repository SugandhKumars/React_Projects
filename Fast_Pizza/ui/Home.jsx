import React, { useReducer, useState } from "react";
import { updateName } from "../Features/User/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    if (!name) return;
    dispatch(updateName(name));
    navigate("/menu");
    setName("");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 mt-20">
        <p className="text-4xl text-center font-bold">Grab Your Pizza 🍕</p>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-60 p-2 rounded-md outline-none font-mono border-[1px]"
        />
        {name.trim().length > 0 && (
          <button
            onClick={handleClick}
            className="p-2 bg-blue-300 rounded-lg px-4 font-medium"
          >
            Submit
          </button>
        )}
      </div>
    </>
  );
}

export default Home;
