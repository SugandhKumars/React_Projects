import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function Header() {
  const userName = useSelector((state) => state.user.userName);
  const navigate = useNavigate();
  return (
    <>
      <div className="h-20 px-4 bg-orange-300 flex items-center justify-between fixed w-full z-20">
        <p className="text-3xl cursor-pointer" onClick={() => navigate("/")}>
          Fast Pizza Shop
        </p>
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-lg outline-none"
        />
        <p className="font-extrabold text-xl">{userName}</p>
      </div>
    </>
  );
}

export default Header;
