import React, { useEffect, useState } from "react";
import { StateLoader, sectionLayout } from "../../utils/sections";
import { useDispatch, useSelector } from "react-redux";
import { getExpenseById } from "../../store/actions/expenses/getExpenseByID";
import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../elements/Button";
import arrowRight from "../../assets/images/arrow-right.png";
import { deleteExpense } from "../../store/actions/expenses/deleteExpense";

function DetailExpense() {
  const { expense, loading } = useSelector((state) => state?.expenses);
  const userID = localStorage.getItem("splitifyUser");
  const parID = JSON.parse(userID);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadingDel, setLoadingDel] = useState(false);

  //   console.log(expense.title);
  //   useEffect(() => {
  //     dispatch(getExpenseById(parID.id));

  //   }, []);

  const handleDelete = (itemID) => {
    setLoadingDel(true);
    let dataEx = {
      owner: parID.id,
      item: itemID,
    };
    dispatch(
      deleteExpense({ dataEx, callback: () => navigate("../expenses") })
    );
  };

  return (
    <div className={`${sectionLayout} relative`}>
      {/* ----- loader */}
      {loading && <StateLoader checkStatus={loading} />}

      {loadingDel && <StateLoader checkStatus={loadingDel} />}

      {/* --------------------- TITLE */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-5">
        <div className="flex items-center gap-2 mb-6">
          <Link
            to="../expenses"
            className="w-[40px] h-[40px] shadow-md p-1 flex justify-center items-center border hover:scale-125 transition-all duration-300"
          >
            {" "}
            <img
              src={arrowRight}
              alt="icon"
              className="h-[24px] w-[30px] rotate-180"
            />
          </Link>
          <div className="text-[32px] font-bold">Expense</div>
        </div>

        {/* <Link to="../expense"> */}
        <div className="flex items-center gap-3">
          {/* -----delete */}
          <button
            onClick={() => handleDelete(expense?._id)}
            className={`h-[48px] w-[100px] text-cool-white-100 bg-primary-100   flex justify-center items-center font-semibold rounded`}
          >
            Delete
          </button>

          {/* ------------edit */}
          <button
            className={`h-[48px] w-[160px] text-cool-white-100 bg-primary-100   flex justify-center items-center font-semibold rounded`}
          >
            <p className="flex items-center gap-2">{<FaPlus />} Edit Expense</p>
          </button>
        </div>

        {/* </Link> */}
      </div>

      {/* --------------------- USER */}
      <div className="min-h-[130px] mb-10 w-full flex flex-col sm:flex-row sm:items-center gap-10 sm:gap-0 shadow-md border-gray-200 py-3 px-6 rounded-md bg-primary-50">
        {/* -------- left */}
        <div className="flex-1 h-full flex gap-2 items-center ">
          <div className="w-[50px] min-h-[50px] sm:h-[64px] sm:w-[64px] flex justify-center items-center font-extrabold uppercase rounded-full bg-slate-400">
            {expense?.title?.slice(0, 2)}
          </div>

          {/* ------- */}
          <div className=" w-[140px] sm:w-full flex-1 flex flex-col gap-1">
            <div className="text-[22px] capitalize sm:text-[26px] text-gray-800 font-bold">
              {expense?.title}
            </div>
            <div className=" text-[12px] sm:text-[15px] text-gray-500">
              Created by you
            </div>
          </div>
        </div>

        {/* -------- right */}
        <div className="flex-1 flex justify-end items-center gap-1 sm:gap-5 h-full">
          <div className="flex flex-col items-end gap-1">
            <div className=" text-[22px] sm:text-[28px] text-gray-800 font-bold">
              ₦{expense?.amount?.toLocaleString()}
            </div>
            <div className=" text-[12px] sm:text-[15px] text-gray-500">
              Total Expense
            </div>
          </div>
        </div>
      </div>

      {/* --------------------- CATEGORY */}
      <div className="min-h-[130px] mb-10 w-full flex flex-col sm:flex-row sm:items-center gap-10 sm:gap-0 shadow border-gray-200 py-3 px-6 rounded-md ">
        {/* -------- left */}
        <div className="flex-1 h-full flex gap-2 items-center ">
          {/* ------- */}
          <div className=" w-[140px] sm:w-full flex-1 flex flex-col gap-1">
            <div className="text-[18px] capitalize sm:text-[28px] text-gray-800 font-bold">
              {expense?.category}
            </div>
            <div className=" text-[12px] sm:text-[15px] text-gray-500">
              Category
            </div>
          </div>
        </div>

        {/* -------- right */}
        <div className="flex-1 flex justify-end items-center gap-1 sm:gap-5 h-full">
          <div className="flex flex-col items-end gap-1">
            <div className=" text-[14px] sm:text-[28px] text-gray-800 font-bold">
              {expense?.createdAt?.slice(0, 10)}
            </div>
            <div className=" text-[12px] sm:text-[15px] text-gray-500">
              Date
            </div>

            {/* <div className="text-[15px] text-gray-500">{item.date.slice(0, 10)}</div> */}
          </div>
        </div>
      </div>

      {/* --------------------- MEMBERS */}
      <div className="min-h-[100px] w-full border px-2 py-4 sm:p-3 mt-8 rounded-md">
        <div>
          <div className=" text-subTitle font-bold">Split Members</div>
        </div>

        <div className="mt-5 px-0 sm:px-6 pb-4">
          {/* -------- each ==========ARRAY */}
          {expense?.members?.map((item, index) => {
            return (
              <div
                key={index}
                className="h-[80px] mb-2 shadow rounded-md border border-gray-200 py-2 px-2 border-solid border-b-2 flex items-center"
              >
                {/* -------- left */}
                <div className="flex-1 h-full flex gap-2 items-center ">
                  <div className="w-[50px] min-h-[50px] sm:h-[50px] flex justify-center items-center font-extrabold uppercase rounded-full bg-slate-400">
                    {item?.name?.slice(0, 2)}
                  </div>

                  {/* ------- */}
                  <div className=" w-[140px] sm:w-full flex-1 flex ">
                    <div className="text-[15px] capitalize sm:text-[18px] text-gray-800 font-bold">
                      {item?.name ? item.name : <span className="text-[14px] lowercase">If this card is empty, please delete existing expense. Code has been updated.</span>}
                    </div>
                  </div>
                </div>

                {/* -------- right */}
                <div className="flex-1 flex justify-end items-center gap-1 sm:gap-5 h-full">
                  <div className="flex flex-col items-end gap-1">
                    <div className=" text-[14px] sm:text-[18px] text-gray-800 font-bold">
                      ₦{item?.share?.toLocaleString()}
                    </div>
                    {/* <div className="text-[15px] text-green">Paid</div> */}
                    <div className="text-[15px] text-rose-500">Pending</div>

                    {/* <div className="text-[15px] text-gray-500">{item.date.slice(0, 10)}</div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailExpense;
