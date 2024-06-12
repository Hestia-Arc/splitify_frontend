import React from "react";
import bg from "../assets/images/image 2.png"
import { landingStyle } from "../utils/sections";

const Split = () => {
  return (
      <section className={landingStyle}>
          <div className="flex-1 flex justify-center items-center flex-col  text-center">
            <h2 className="text-[3.8rem] font-bold ">
              Split Bills Easily{" "}
            </h2>
            <p className="text-[20px]">
              Add friends and split bills in just a few taps.
            </p>
          </div>

          {/* --------- */}
          <div className="flex-1 h-full w-full"
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

export default Split;
