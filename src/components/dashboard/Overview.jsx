import React, { useState, useEffect } from "react";
import { sectionLayout } from "../../utils/sections";
import { ButtonPrimary } from "../elements/Button";
import { MdGroupAdd } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAccount } from "../../store/actions/auth/account";
import arrowRight from "../../assets/images/arrow-right.png";
import f1 from "../../assets/images/Ellipse 9.jpg";
import f2 from "../../assets/images/Ellipse 10.png";
import f3 from "../../assets/images/Ellipse 11.png";
import f4 from "../../assets/images/Ellipse 12.png";
import { getAllExpense } from "../../store/actions/expenses/getAllExpense";

const friendImage = [f1, f2, f3, f4];

const calenderStyle = "w-[90px] p-2 bg-transparent border rounded ";

const Overview = () => {
  const userID = localStorage.getItem("splitifyUser");
  const user = JSON.parse(userID);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { expenses } = useSelector((state) => state?.expenses);

  const [initialOverview, setInitialOverview] = useState(true);

  // =================
  const calTotal = (val) => {
    let totalAll = 0;

    val.forEach((d) => (totalAll += Number(d?.amount)));

    return totalAll.toLocaleString();
  };

  // console.log(account);
  useEffect(() => {
    dispatch(getAllExpense(user?.id));
  }, []);

  const days = ["Day", ...Array.from({ length: 31 }, (_, i) => i + 1)];
  const months = ["Month", ...Array.from({ length: 12 }, (_, i) => i + 1)];
  const years = ["Year", ...Array.from({ length: 101 }, (_, i) => 2024 - i)];

  const [selectedDay, setSelectedDay] = useState("Day");
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [selectedYear, setSelectedYear] = useState("Year");

  const handleDayChange = (e) => setSelectedDay(e.target.value);
  const handleMonthChange = (e) => setSelectedMonth(e.target.value);
  const handleYearChange = (e) => setSelectedYear(e.target.value);

  const friendsImg = [
    "/images/Ellipse 10.png",
    "/images/Ellipse 11.png",
    "/images/Ellipse 12.png",
    "/images/Ellipse 13.png",
    "/images/Ellipse 14.png",
  ];

  let jj = "Oluwaseyi funmilayo";
  return (
    <div className={sectionLayout}>
      {/* ============ NAME */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-5">
        <div className="flex items-center gap-1 tracking-[0] leading-6">
          <div className="font-semibold text-[18px] sm:text-[22px] text-gray-500 mr-2">
            Welcome back
          </div>
          {/* {jj.length > 10 ? `${jj.slice(0, 5)}...` : jj} */}

          <div className="bold text-black text-3xl font-bold font-poppins">
            {user?.fullname?.length > 10
              ? `${user?.fullname.slice(0, 8)}...`
              : user?.fullname}
            {!user?.fullname && "Friend"}
          </div>
        </div>

        {/* ------------ */}
        <div className="hidden sm:flex items-center gap-2">
          <select
            className={calenderStyle}
            value={selectedDay}
            onChange={handleDayChange}
          >
            {days.map((day, index) => (
              <option key={index}>{day}</option>
            ))}
          </select>
          <select
            className={calenderStyle}
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            {months.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </select>
          <select
            className={calenderStyle}
            value={selectedYear}
            onChange={handleYearChange}
          >
            {years.map((year, index) => (
              <option key={index}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ======================== NO HISTORY */}
      {expenses?.length === 0 ? (
        <div className="h-[400px] flex justify-center items-center ">
          <div className=" flex flex-col justify-center items-center">
            <p className="font-bold text-[24px] text-center">
              Welcome to Splitify, your have no transaction history yet.
            </p>
            <p className="font-bold text-[24px] text-center">
              Add friends and start share bills.
            </p>

            <div className="mt-3">
              <Link
                to="friends/addfriend "
                className="flex items-center gap-1 text-primary-100"
              >
                {" "}
                <MdGroupAdd className="text-2xl " />
                <p>Add Friend</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* ============================= HISTORY ---- TOTALS */}
          <div className="min-h-[150px] flex flex-col sm:flex-row items-center gap-3 sm:gap-10 mb-8">
            {/* ------------- total */}
            <div className="h-[100px] shadow-md sm:h-[150px] w-full sm:w-2/3 flex flex-col items-center justify-center border rounded-md">
              <h1 className="font-bold">Total Expenses</h1>
              <p className="text-lg font-bold">₦{calTotal(expenses)}</p>

              {/* <p className="text-lg font-bold">₦{expenses?.amount}</p> */}
            </div>

            {/* -------- owe */}
            <div className="h-[100px] shadow-md sm:h-[150px] w-full sm:w-2/3 flex flex-col items-center justify-center border rounded-md">
              <h1 className="font-bold">You Owe</h1>
              <p className="text-lg font-bold">₦0</p>
            </div>

            {/* --------------- owed */}
            <div className="h-[100px] shadow-md sm:h-[150px] w-full sm:w-2/3 flex flex-col items-center justify-center border rounded-md">
              <h1 className="font-bold">You Are Owed</h1>
              <p className="text-lg font-bold">₦0</p>
            </div>
          </div>

          {/* ========================= ACTIONS */}
          <div className="min-h-[100px] w-full mb-8 flex flex-wrap sm:flex-nowrap sm:flex-row gap-4 sm:gap-5">
            <div className=" w-[40%] sm:w-2/3">
              <Link to="./expenses">
                <ButtonPrimary
                  text="Add Expense"
                  style=" w-full shadow text-primary-100 font-bold border border-gray-300 hover:bg-gray-300  hover:bg-opacity-90 transition-all duration-300"
                />
              </Link>
            </div>

            {/* ------ */}
            <ButtonPrimary
              text="Request"
              style=" w-[40%] sm:w-2/3 shadow text-primary-100 border border-gray-300 hover:bg-gray-300  hover:bg-opacity-90 transition-all duration-300"
            />

            {/* --------- */}
            <ButtonPrimary
              text="Settle Balance"
              style=" w-[40%] sm:w-2/3 shadow text-primary-100 border border-gray-300 hover:bg-gray-300  hover:bg-opacity-90 transition-all duration-300"
            />

            {/* --------- */}
            <div className="w-[40%] sm:w-2/3">
              <Link to="./friends">
                <ButtonPrimary
                  text="Manage Friends"
                  style=" w-full shadow text-primary-100 border border-gray-300 hover:bg-gray-300  hover:bg-opacity-90 transition-all duration-300"
                />
              </Link>
            </div>
          </div>

          {/* ============================= TRANSACTION */}
          <div>
            <div className="font-semibold text-gray-800 text-subTitle mb-2">
              Pending Transaction
            </div>

            <div className="w-full flex  items-center gap-3 overflow-x-auto pb-4 sm:gap-5">
              {expenses?.map((item, index) => (
                <div
                  key={index}
                  className="h-[340px] min-w-[290px] max-w-[298px] sm:min-w-[380px] sm:max-w-[380px]  shadow-lg border border-primary-50 flex flex-col items-center gap-5 bg-primary-50 rounded-lg p-4"
                >
                  {/* -------- title */}
                  <p className="font-bold capitalize font-poppins text-[20px]">
                    {item.title}
                  </p>

                  {/* ------------ amount */}
                  <div className="h-[80px] w-full flex justify-center items-center gap-14">
                    <div className="flex flex-col items-center">
                      <h4 className="text-gray-600 text-[15px]">Total Bill</h4>
                      <p className="text-gray-900 font-semibold text-[20px]">
                        ₦{item?.amount.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                      <h1 className="text-gray-600 text-[15px]">You Owe 0%</h1>
                      <p className="text-gray-900 font-semibold text-[20px]">
                        ₦0
                      </p>
                    </div>
                  </div>

                  {/* ----------- split with */}
                  <div className="h-[100px] text-center">
                    <p className="text-gray-600 text-[16px]">
                      Bill Split Between
                    </p>

                    {/* --------images */}
                    <div className="h-[80px] w-full flex items-center justify-center gap-3">
                      {item?.members?.slice(0,4)?.map((img, index) => (
                        <div className=" border border-gray-300 shadow rounded-full p-[3px]">
                          <div
                            key={index}
                            className="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] flex justify-center items-center bg-stone-600 bg-opacity-40 text-[#fff] text-[22px] shadow-lg rounded-full"
                            alt=""
                          >
                            {img?.name?.slice(0, 1)}
                          </div>
                        </div>
                      ))}

                      {/* {friendImage.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          className="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] rounded-full"
                          alt=""
                        />
                      ))} */}
                    </div>
                  </div>

                  {/* --------------- pay button */}
                  <ButtonPrimary
                    text="Pay Bill"
                    style=" w-2/3 bg-primary-100 text-cool-white-100 hover:bg-[#B70569] hover:bg-opacity-90 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/*========================= HISTORY */}
          <div className="min-h-[100px] w-full border px-2 py-4 sm:p-3 mt-8 rounded-md">
            <div>
              <div className=" text-subTitle font-bold">Split Bill History</div>
            </div>

            <div className="mt-5 px-0 sm:px-6 pb-4">
              {/* -------- each ==========ARRAY */}
              {expenses?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="h-[80px] shadow rounded-md border border-gray-200 py-2 px-2 border-solid border-b-2 flex items-center"
                  >
                    {/* -------- left */}
                    <div className="flex-1 h-full flex gap-2 items-center ">
                      <div className="w-[50px] min-h-[50px] sm:h-[50px] flex justify-center items-center font-extrabold uppercase rounded-full bg-slate-400">
                        {item.title.slice(0, 2)}
                      </div>

                      {/* ------- */}
                      <div className=" w-[140px] sm:w-full flex-1 flex flex-col gap-1">
                        <div className="text-[15px] sm:text-[18px] text-gray-800 font-bold">
                          {item.title}
                        </div>
                        <div className=" text-[12px] sm:text-[15px] text-gray-500">
                          {item?.createdAt?.slice(0, 10)}
                        </div>
                      </div>
                    </div>

                    {/* -------- right */}
                    <div className="flex-1 flex justify-end items-center gap-1 sm:gap-5 h-full">
                      <div className="flex flex-col items-end gap-1">
                        <div className=" text-[14px] sm:text-[18px] text-gray-800 font-bold">
                          ₦{item.amount.toLocaleString()}
                        </div>
                        {/* <div className="text-[15px] text-green">Paid</div> */}
                        <div className="text-[15px] text-rose-500">Pending</div>

                        {/* <div className="text-[15px] text-gray-500">{item.date.slice(0, 10)}</div> */}
                      </div>
                      {/* --- more */}
                      <img
                        src={arrowRight}
                        alt="icon"
                        className="h-[28px] w-[30px]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
