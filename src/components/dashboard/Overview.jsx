import React from "react";
import { sectionLayout } from "../../utils/sections";
import { ButtonPrimary } from "../elements/Button";


const calenderStyle = "w-[90px] p-2 bg-transparent border rounded ";

const Overview = () => {
  const days = ["Day", ...Array(31).keys()].map((i) => i + 1);
  const months = ["Month", ...Array(12).keys()].map((i) => i + 1);
  const years = ["Year", ...Array(101).keys()].map((i) => 2024 - i);
  const cardArray = [
    { expense: "Total Expenses", amount: "N80,000" },
    { expense: "You Owe", amount: "N50,000" },
    { expense: "You Are Owed ", amount: "-N50,000" },
  ];
  const expenseArray = [
    {
      item: "Berbecue",
      total: "Total Bill",
      owe: "You owe",
      amount: "N2500",
      oweAmount: "N200",
    },
    {
      item: "Berbecue",

      total: "Total Bill",
      owe: "You owe",
      amount: "N2500",
      oweAmount: "N200",
    },
    {
      item: "Berbecue",

      total: "Total Bill",
      owe: "You owe",

      amount: "N2500",
      oweAmount: "N200",
    },
  ];
  const friendsImg = [
    "/images/Ellipse 10.png",
    "/images/Ellipse 11.png",
    "/images/Ellipse 12.png",
    "/images/Ellipse 13.png",
    "/images/Ellipse 14.png",
  ];
  return (
    <div className={sectionLayout}>
      {/* ============ NAME */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-5  ">
        <div className=" flex items-center gap-1 tracking-[0] leading-6 ">
          <div className="font-semibold text-[18px] sm:text-[22px] text-gray-500 mr-2">
            Welcome back
          </div>
          <div className="bold text-black text-3xl font-bold font-poppins">
            Davina J.
          </div>
        </div>

        {/* ------------ */}
        <div className="flex items-center gap-2">
          <select className={calenderStyle}>
            {days.map((day, index) => (
              <option key={index}>{day}</option>
            ))}
          </select>
          <select  className={calenderStyle}>
            {months.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </select>
          <select  className={calenderStyle}>
            {years.map((year, index) => (
              <option key={index}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ============================= TOTALS */}
      <div className="min-h-[150px] flex flex-col sm:flex-row items-center gap-3 sm:gap-10 mb-8  ">
        {cardArray.map((card, index) => (
          <div
            key={index}
            className="h-[100px] sm:h-[150px] w-full sm:w-2/3 flex flex-col items-center justify-center border  rounded-md"
          >
            <h1 className="font-bold">{card.expense}</h1>
            <p className="text-lg font-bold ">{card.amount}</p>
          </div>
        ))}
      </div>

      {/* ========================= ACTIONS */}
      <div className="h-[100px] mb-8 bg-slate-300 "></div>

      {/* ============================= TRANSACTION */}

      <div className="">
        <div className="font-semibold text-gray-800 text-subTitle mb-2">
          Pending Transaction
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
          {expenseArray.map((expense, index) => (
            <div
              key={index}
              className="h-[340px] w-full sm:w-2/3 flex flex-col items-center gap-5 bg-primary-50 rounded p-4"
            >
              {/* -------- title */}
              <p className="font-bold capitalize font-poppins text-[20px]">
                {expense.item}
              </p>

              {/* ------------ amount */}
              <div className="h-[80px] w-full flex justify-center items-center gap-14">
                <div className="flex flex-col items-center">
                  <h4 className="text-gray-600 text-[15px]">{expense.total}</h4>
                  <p className="text-gray-900 font-semibold text-[20px] ">
                    {expense.amount}
                  </p>
                </div>
                <div className="flex flex-col  justify-between items-center">
                  <h1 className="text-gray-600 text-[15px]">{expense.owe}</h1>
                  <p className=" text-gray-900 font-semibold text-[20px]">
                    {expense.oweAmount}
                  </p>
                </div>
              </div>

              {/* ----------- split with */}
              <div className="h-[100px] text-center">
                <p className="text-gray-600 text-[16px]">Bill Split Between</p>

                {/* --------images */}
                <div className="h-[80px] w-full bg-gray-500 flex justify-between">
                  {friendsImg.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      className=" w-[40px] h-[40px]rounded-full"
                      alt=""
                    />
                  ))}
                </div>
              </div>

              {/* --------------- pay button */}
              <ButtonPrimary
                text="Pay Bill"
                style=" bg-primary-100 text-cool-white-100 hover:bg-[#B70569] hover:bg-opacity-90 transition-all duration-300 "
              />
              {/* // class="px-4 py-1 text-sm text-white font-semibold rounded-md w-full border border-purple-200 hover:bg-gray-900  bg-primary-100 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2" */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
