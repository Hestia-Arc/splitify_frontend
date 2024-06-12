import React from "react";
import bg from "../assets/images/image 3.png";
import { landingStyle } from "../utils/sections";

const Track = () => {
  return (
    <section className={`${landingStyle} bg-primary-50`}>
      <div
        className="flex-1 h-full w-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "contain",
        }}
      ></div>

      {/* ------------- */}
      <div className="flex-1 flex justify-center items-center flex-col  text-center">
        <h2 className="text-[3.8rem] font-bold">Track Expenses</h2>
        <p className="text-[18px]">
          Keep track of who owes what, and settle up with a simple payment.
        </p>
      </div>
    </section>
  );
};

export default Track;
