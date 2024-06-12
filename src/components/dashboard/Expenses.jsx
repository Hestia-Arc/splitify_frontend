import React from "react";
import { sectionLayout } from "../../utils/sections";
import { MdGroupAdd } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { ButtonPrimary } from "../elements/Button";

const Expenses = () => {
  const expenseList = [
    {
      title: "tours",
    },
    {
      title: "tours",
    },
    {
      title: "tours",
    },
    {
      title: "tours",
    },
  ];
  return (
    <div className={sectionLayout}>
      {/* ===================== NO EXPENSES */}
      {expenseList.length === 0 ? (
        <div className="h-[400px] flex justify-center items-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="text-center">
              <p className="font-bold text-[28px] ">Add an expense.</p>

              <p className="font-bold text-[28px] ">
                {" "}
                Add friends to start sharing bills.
              </p>
            </div>

            <Link
              to="addfriend"
              className="flex items-center gap-1 text-primary-100"
            >
              <MdGroupAdd className="text-2xl" />
              <p>Add Expense</p>
            </Link>
          </div>
        </div>
      ) : (
        // ============================  LIST
        <div className="">
          {/* ============== button */}
          <div className="flex items-end justify-between">
            <div className="text-[32px] font-bold">Expenses</div>

            <Link to="addexpense">
              <button
                className={`h-[48px] w-[180px] text-cool-white-100 bg-primary-100   flex justify-center items-center font-semibold rounded`}
              >
                <p className="flex items-center gap-2">
                  {<FaPlus />} Add Expense
                </p>
              </button>
            </Link>
          </div>

          {/* ================ list */}
          <div className="flex flex-wrap gap-3  mt-8 text-[22px]">
            {expenseList.map((item, index) => (
              <div className="min-h-[100px] w-full flex  py-3 px-6 rounded-md bg-primary-50">
                <div key={index} className="h-full flex-1 flex flex-col gap-6 ">
                  {/* ----------------- */}
                  <div>
                    <div className="text-[24px] font-bold capitalize">
                      {item.title}
                    </div>
                    <p className="text-[16px] flex gap-3 text-gray-500">
                      <span>Date: 20-10-2024</span>
                      <span>Category: Food</span>
                    </p>
                  </div>

                  {/* ------btns */}
                  <div className="flex gap-2">
                    <ButtonPrimary
                      text="Paid N5000"
                      style="w-fit px-6 text-[16px] rounded-md text-cool-white-100 bg-primary-100"
                    />
                    <ButtonPrimary
                      text="You are Owed: N0"
                      style="w-fit px-6 text-[16px] rounded-md text-cool-white-100 bg-primary-100"
                    />
                  </div>
                </div>

                {/* ----------- right */}
                <div className="flex-1 flex items-center justify-end gap-2">
                  <div className="text-[36px]">N20,000</div>
                  <Link to="./addexpense">view</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Expenses;
