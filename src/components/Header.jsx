import React, { useState } from "react";
import { FaMicrophoneAlt, FaRocketchat, FaRegBell } from "react-icons/fa";
import logo from "../assets/images/split-logo.png";
import { MdMenu } from "react-icons/md";

const Header = ({toggleIsOpen}) => {
  const userID = localStorage.getItem("splitifyUser");
  const parID = JSON.parse(userID);

  return (
    <header className="h-[70px] shadow-md sticky top-0 left-0 right-0 flex justify-between px-2 sm:px-5 items-center bg-primary-10  z-50  border-r-gray-400 border-b">
      <div class="relative block ">
        <input
          className="hidden sm:block placeholder:italic  text-wrap placeholder:text-slate-400 bg-white w-full border border-slate-300 rounded-md py-2 pl-2  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for Friends..."
          name="search"
        />
        <span className="absolute hidden inset-y-0 right-0 sm:flex pr-2 items-center ">
          <FaMicrophoneAlt className="h-5 w-5 fill-slate-300 " />
        </span>

        {/* --------mobile */}
        {/* =============== LOGO  TOGGLE */}
        <div className="min-h-[58px] w-full flex flex-row-reverse sm:hidden gap-2 sm:gap-0 items-end justify-between sm:px-2 ">
          <div
          // className={`${
          //   isOpen ? "block" : "hidden "
          // } font-bold text-[1.5rem] transition-all `}
          >
            <div className="shadow border border-gray-300 p-[2px]  rounded-md">
              <div className=" h-[48px] w-[62px] border  rounded-md   flex justify-center items-center bg-cool-white-100 bg-opacity-70">
                <img src={logo} alt="logo" className="h-[45px] w-[45px]" />
              </div>
            </div>
          </div>

          <div
            onClick={toggleIsOpen}
            className="flex justify-center items-center px-1 border border-gray-300 rounded-md shadow  text-primary-100 hover:text-white hover:bg-primary-100 cursor-pointer z-20 "
          >
            <MdMenu className="w-8 h-8 " />
          </div>
        </div>
      </div>

      {/* ========================== right */}
      <div className="flex gap-4 items-center">
        <FaRocketchat className="h-5 w-5 fill-gray-900 " />
        <FaRegBell className="h-5 w-5 fill-gray-800" />

        <div className="border border-gray-300 bg-stone-300 shadow-md p-[3px] rounded-full">
          <div className="h-[50px] w-[50px] flex justify-center items-center font-bold bg-gray-500 rounded-full  text-[#fff]">
            {parID?.fullname?.slice(0, 1)}
          </div>
        </div>
        {/* <img
          src="/images/Ellipse 9.jpg"
          alt="Profile"
          className=" w-[40px] h-[40px]rounded-full"
        /> */}
      </div>
    </header>
  );
};

export default Header;
