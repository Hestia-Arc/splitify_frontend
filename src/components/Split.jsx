import React from "react";
import bg from "../assets/images/image 2.png";
import { landingStyle, shadowImage } from "../utils/sections";

const Split = () => {
  return (
    <section className={landingStyle}>
      <div className=" sm:h-full flex-1 flex justify-center items-center flex-col  text-center">
        <h2 className="text-[2.6rem] sm:text-[3.8rem] font-bold ">
          Split Bills Easily{" "}
        </h2>
        <p className="text-[18px] text-gray-600 sm:text-[20px]">
          Add friends and split bills in just a few taps.
        </p>
      </div>

      {/* --------- */}
      <div className=" sm:flex-1 flex justify-center items-center">
        <div className={`${shadowImage} py-4 px-4 sm:py-5 sm:px-8`}>
          <img src={bg} alt="" className="h-[350px] w-[320px] sm:h-[400px] sm:w-[400px]" />
        </div>
      </div>
    </section>
  );
};

export default Split;
