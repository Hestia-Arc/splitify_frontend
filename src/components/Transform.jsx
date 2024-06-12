import React from "react";
import { landingStyle } from "../utils/sections";
import bg from "../assets/images/trans-bg.png";
import { ButtonPrimary } from "./elements/Button";
import { Link } from "react-router-dom";

const Transform = () => {
  return (
    <section className={`${landingStyle} bg-primary-50`}>
      {/* ------------- */}
      <div className="flex-1 flex justify-center items-center ">
        <div className=" w-[70%] flex flex-col gap-8 justify-center items-center ">
          <p className="text-[20px] text-center">
            Transform the way you share expenses with friends. Splitify takes
            the hassle out of managing group expenses, ensuring fair and
            transparent split every time. Try it now and experience effortless
            expense management!
          </p>

          <Link to="/signup">
            <ButtonPrimary
              text="Try Now"
              style="bg-[#B70569] text-cool-white-100 w-[220px] "
            />
          </Link>
        </div>
      </div>

      {/* ------------ */}
      <div className="flex-1 flex justify-center items-center">
        <img src={bg} alt="" className="h-[400px] w-[600px]" />
      </div>
    </section>
  );
};

export default Transform;
