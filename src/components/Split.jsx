import React from "react";
import bg from "../assets/images/image 2.png";
import { landingStyle } from "../utils/sections";

const Split = () => {
  return (
    <section className={landingStyle}>
      <div className=" sm:h-full flex-1 flex justify-center items-center flex-col  text-center">
        <h2 className="text-[2.6rem] sm:text-[3.8rem] font-bold ">Split Bills Easily </h2>
        <p className="text-[18px] text-gray-600 sm:text-[20px]">
          Add friends and split bills in just a few taps.
        </p>
      </div>

      {/* --------- */}
      <div className=" sm:flex-1 flex justify-center items-center">
        <img src={bg} alt="" className="h-[400px] w-[400px]" />
      </div>
    </section>
  );
};

export default Split;
