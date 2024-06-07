import React from "react";
import { FaMicrophoneAlt, FaRocketchat, FaRegBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between  p-5 items-center  border-r-gray-400 border-b">
      <div class="relative block ">
        <input
          className="placeholder:italic  text-wrap placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for Friends..."
          name="search"
        />
        <span className="absolute inset-y-0 right-0 flex pr-2 items-center ">
          <FaMicrophoneAlt className="h-5 w-5 fill-slate-300 " />
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <FaRocketchat className="h-5 w-5 fill-gray-900 " />
        <FaRegBell className="h-5 w-5 fill-gray-800"/>

        <img
          src="/images/Ellipse 9.jpg"
          alt="Profile"
          className=" w-[40px] h-[40px]rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
