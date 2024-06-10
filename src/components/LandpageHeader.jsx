import React from "react";

const LandpageHeader = () => {
  return (
    <div>
      <header className="relative bg-gray-900/50 overflow-hidden ">
        <img
          src="src/assets/images/Rectangle 42.png"
          alt="Header Background"
          fill
          className="object-contain "
        />
        <div className="absolute inset-0   flex items-center justify-start w-[90%] m-auto ">
          <div className="text-center  text-white w-[60%]">
            <h1 className="text-4xl font-bold mb-5">
              Effortlessly Split Expenses, Track Debts, and Settle Balances
            </h1>
            <p className="text-sm">
              Whether it’s dinner with friends, a weekend getaway, or household
              expenses, our app simplifies bill splitting. Say goodbye to manual
              calculations and awkward conversations!{" "}
            </p>
            <div className="flex gap-4"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandpageHeader;
