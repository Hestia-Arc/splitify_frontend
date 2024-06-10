import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

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
    <div>
      <section className="w-full  bg-primary-100 py-20">
        <div className="flex text-cool-white-100  items-start justify-between gap-5   w-[90%] m-auto ">
          <img
            className=" bg-cool-white-100 rounded-lg"
            src="src/assets/images/image 15.png"
            alt=""
          />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl  font-bold mb-5">Contact Information</h1>
            <p>
              Email:
              <a className="pl-1" href="#">
                info@splitify.com
              </a>
            </p>
            <p>phone: +234 806 306 8974</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl  font-bold mb-5">Teams </h1>
            {teamMembers.map((team, index) => (
              <p key={index}>{team.member}</p>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl  font-bold mb-5">Follow Us </h1>
            <div className="flex gap-5">
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
