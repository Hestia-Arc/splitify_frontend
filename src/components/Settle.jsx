import React from "react";
import { landingStyle } from "../utils/sections";
import bg from "../assets/images/settle-bg.png";

const Settle = () => {
  return (
    <section className={landingStyle}>
      <div className="flex-1 flex justify-center items-center flex-col  text-center">
        <h2 className="text-[4rem] font-bold">Settle Debts</h2>
        <p className="text-[20px]">Pay your friends directly through the app.</p>
      </div>

      {/* ---------- */}
      <div
        className="flex-1 h-full w-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "contain",
        }}
      ></div>
    </section>
  );
};

export default Settle;
