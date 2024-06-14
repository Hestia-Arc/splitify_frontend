import React from "react";
import bg from "../assets/images/image 3.png";
import { landingStyle, shadowImage } from "../utils/sections";

const Track = () => {
  return (
    <section className={`${landingStyle} bg-primary-50 flex-col-reverse`}>
      <div className=" sm:flex-1 flex justify-center items-center">
        <div className={`${shadowImage} py-4 px-4 sm:py-5 sm:px-8`}>
          <img
            src={bg}
            alt=""
            className="h-[350px] w-[320px] sm:h-[400px] sm:w-[400px]"
          />
        </div>
      </div>

      {/* ------------- */}
      <div className="flex-1 flex justify-center items-center flex-col  text-center">
        <h2 className="text-[2.6rem] sm:text-[3.8rem] font-bold ">
          Track Expenses
        </h2>
        <p className="text-[18px] text-gray-600 sm:text-[18px]">
          Keep track of who owes what, and settle up with a simple payment.
        </p>
      </div>
    </section>
  );
};

export default Track;
