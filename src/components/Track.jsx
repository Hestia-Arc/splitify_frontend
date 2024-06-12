import React from "react";
import bg from "../assets/images/image 3.png";
import { landingStyle } from "../utils/sections";

const Track = () => {
  return (
    <section className={`${landingStyle} bg-primary-50 flex-col-reverse`}>
      <div className=" sm:flex-1 flex justify-center items-center">
        <img src={bg} alt="" className="h-[400px] w-[400px]" />
      </div>

      {/* ------------- */}
      <div className="flex-1 flex justify-center items-center flex-col  text-center">
        <h2 className="text-[2.6rem] sm:text-[3.8rem] font-bold ">Track Expenses</h2>
        <p className="text-[18px] text-gray-600 sm:text-[18px]">
          Keep track of who owes what, and settle up with a simple payment.
        </p>
      </div>
    </section>
  );
};

export default Track;
