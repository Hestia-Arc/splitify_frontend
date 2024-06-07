import React from "react";

const Dashboard = () => {
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
    <>
      <div className="flex items-start px-6 my-10">
        <p className=" text-gray-400 text-2xl text-center tracking-[0] leading-6 ">
          <span className="mr-2">Welcome Back</span>
          <span className="bold text-black text-3xl">Davina J.</span>
        </p>
        <div>
          <select>
            {days.map((day, index) => (
              <option key={index}>{day}</option>
            ))}
          </select>
          <select>
            {months.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </select>
          <select>
            {years.map((year, index) => (
              <option key={index}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-3 md:grid-cols-1 gap-5 p-6 sm:p-2">
        {cardArray.map((card) => (
          <div className="flex flex-col items-center justify-center border  rounded-md p-5 sm:px-2">
            <h1 className="font-bold">{card.expense}</h1>
            <p className="text-lg font-bold ">{card.amount}</p>
          </div>
        ))}
      </div>
      <span className="font-bold">Pending Transaction</span>

      <div className="flex-1 grid grid-cols-3 md:grid-cols-1 gap-5 p-6 sm:p-2">
        {expenseArray.map((expense) => (
          <div className="flex flex-col items-center justify-center bg-primary-50 rounded-md p-5 gap-7 sm:px-2">
            <p className="font-bold">{expense.item}</p>
            <div className="flex justify-between w-full items-center  gap-5">
              <div className="flex flex-col items-center">
                <h1 className="">{expense.total}</h1>
                <p className=" ">{expense.amount}</p>
              </div>
              <div className="flex flex-col  justify-between items-center">
                <h1 className="">{expense.owe}</h1>
                <p className=" ">{expense.oweAmount}</p>
              </div>
            </div>
            <p className="font-bold">Bill Split Between</p>
            <div className="flex justify-between w-full">
              {friendsImg.map((img) => (
                <img
                  src={img}
                  className=" w-[40px] h-[40px]rounded-full"
                  alt=""
                />
              ))}
            </div>
            <button
              type="button"
              class="px-4 py-1 text-sm text-white font-semibold rounded-md w-full border border-purple-200 hover:bg-gray-900  bg-primary-100 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
            >
              Pay Bill
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
