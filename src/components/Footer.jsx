import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/split-logo.png";

const Footer = () => {
  const teamMembers = [
    { member: "Nafisa Abdurrahman Umar" },
    { member: "Noluthando Kathi Tyesi" },
    { member: "Esther Afolabi" },
    { member: "Daisy Dickson Hart" },
    { member: "Mufidat Abdulsalam" },
    { member: "Rohimat Mustapha" },
  ];
  return (
    <footer className="min-h[400px] sm:h-[400px] w-full bg-primary-100 pt-8 px-3 sm:px-16 ">
      <div className="h-[80%] w-full flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between text-cool-white-100  ">
        <div className="flex-1">
          <div className=" h-[82px] w-[120px] rounded-md  flex justify-center items-center bg-cool-white-100 bg-opacity-70">
            <img src={logo} alt="logo" className="h-[80px] w-[100px]" />
          </div>
        </div>

        {/* ----------------- */}
        <div className="w-full sm:w-[58%] flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between ">
          {/* --------- 1 */}
          <div>
            <h6 className="text-[20px] font-bold mb-2 text-[#dad7d7]">
              Contact Information
            </h6>
            <p>
              Email:
              <a className="pl-1" href="#">
                info@splitify.com
              </a>
            </p>
            <p>phone: +234 806 306 8974</p>
          </div>

          {/* --------- 2 */}
          <div className="flex flex-col ">
            <h6 className="text-[20px] font-bold mb-2 text-[#dad7d7]">
              Teams{" "}
            </h6>
            {teamMembers.map((team, index) => (
              <p key={index}>{team.member}</p>
            ))}
          </div>

          {/* -------- 3 */}
          <div className="flex flex-col ">
            <h6 className="text-[20px] font-bold mb-2 text-[#dad7d7]">
              Follow Us{" "}
            </h6>
            <div className="flex gap-2">
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>


      </div>

      {/* ------- copyright */}
      <div className="text-center text-[#dad7d7] pt-10 pb-5 sm:py-0">
          <p>2024 Splitify. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
