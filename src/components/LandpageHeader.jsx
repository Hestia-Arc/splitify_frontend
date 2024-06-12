import React from "react";
import backgd from "../assets/images/Rectangle 42.png";
import logo from "../assets/images/split-logo.png";
import { ButtonPrimary } from "./elements/Button";
import { Link, useNavigate } from "react-router-dom";

const LandpageHeader = () => {
  const navigate = useNavigate();

  return (
    <header
      className=" h-screen w-full relative bg-gray-900/50 py-5 px-16 "
      style={{
        backgroundImage: `url(${backgd})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div className="h-full flex flex-col gap-[6rem] ">
        {/* ----- Navigation */}
        <nav className="h-[100px] w-full flex justify-between items-center ">
          <div className=" h-[82px] w-[120px] rounded-md flex justify-center items-center bg-cool-white-100 bg-opacity-70">
            <img src={logo} alt="logo" className="h-[80px] w-[100px]" />
          </div>

          <div className="flex gap-4">
            <Link to="/signup">
              <ButtonPrimary
                text="Sign up"
                style="bg-[#B70569] text-cool-white-100 w-[140px] "
              />
            </Link>

            <Link to="/login">
              <ButtonPrimary
                text="Login"
                style="bg-primary-50 text-[#B70569] w-[140px] "
              />
            </Link>
          </div>
        </nav>

        {/* --------------- Tags */}
        <div className=" text-white w-[60%]">
          <div>
            <h1 className="text-[3rem] font-lato leading-[60px] font-bold mb-3">
              Effortlessly split expenses, track debts, and settle balances
            </h1>
          </div>

          <p className="text-[19px] text-[#dad7d7] mb-14">
            Whether it’s dinner with friends, a weekend getaway, or household
            expenses, our app simplifies bill splitting. Say goodbye to manual
            calculations and awkward conversations!{" "}
          </p>

          <Link to="/signup">
            <ButtonPrimary
              text="Get Started"
              style="bg-[#B70569] text-cool-white-100 w-[200px] "
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default LandpageHeader;
