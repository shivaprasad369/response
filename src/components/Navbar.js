import React from "react";
// import logo from "./home.jpg";
// import { LuMenuSquare } from "react-icons/lu";
export default function Navbar() {
  return (
    <div className="flex gap-2 bg-black text-white">
      <div >
        <button className="border-none bg-gray p-3 hover:bg-green-600" >
          Home
        </button>
        <button className="border-none bg-gray p-3 hover:bg-green-600">
          About
        </button>
      </div>
    </div>
  );
}
