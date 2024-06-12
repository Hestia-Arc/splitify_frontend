import React from "react";
import { landingStyle } from "../utils/sections";
import bg from "../assets/images/settle-bg.png";

const Settle = () => {
  return (
    <section className={landingStyle}>
      <div className="flex-1 flex justify-center items-center flex-col  text-center">
        <h2 className="text-[2.6rem] sm:text-[3.8rem] font-bold ">Settle Debts</h2>
        <p className="text-[18px] text-gray-600 sm:text-[20px]">Pay your friends directly through the app.</p>
      </div>

      {/* ---------- */}
      <div className=" sm:flex-1 flex justify-center items-center">
        <img src={bg} alt="" className="h-[400px] w-[400px]" />
      </div>
    </section>
  );
};

export default Settle;
