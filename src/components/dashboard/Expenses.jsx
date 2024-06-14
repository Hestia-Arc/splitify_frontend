import React, { useEffect } from "react";
import { sectionLayout } from "../../utils/sections";
import { MdGroupAdd } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import arrowRight from "../../assets/images/arrow-right.png";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { getAllExpense } from "../../store/actions/expenses/getAllExpense";

const Expenses = () => {
  const { expenses } = useSelector((state) => state?.expenses);
  const userID = localStorage.getItem("splitifyUser");
  const parID = JSON.parse(userID);
  const dispatch = useDispatch();

  // console.log(parID.id)
  // console.log(friends);
  useEffect(() => {
    dispatch(getAllExpense(parID.id));
  }, []);

 
  return (
    <div className={sectionLayout}>
      {/* ===================== NO EXPENSES */}
      {expenses?.length === 0 ? (
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
              to="addexpense"
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
            {expenses?.map((item, index) => (
              <div className="min-h-[100px] w-full flex flex-col sm:flex-row gap-10 sm:gap-0 shadow-md border-gray-200 py-3 px-6 rounded-md bg-primary-50">
                <div key={index} className="h-full flex-1 flex flex-col gap-6 ">
                  {/* ----------------- */}
                  <div>
                    <div className="text-[24px] font-bold capitalize">
                      {item.title}
                    </div>
                    <p className="text-[16px] flex gap-3 text-gray-500">
                      <span>Date: {item.createdAt.slice(0, 10)}</span>
                      <span className="capitalize">Category: {item.category}</span>
                    </p>
                  </div>

                  {/* ------btns */}
                  <div className="flex gap-2">
                    <ButtonPrimary
                      text="Paid ₦5000"
                      style="min-w-[100px] px-30 sm:px-6 text-[12px] sm:text-[16px] rounded-md text-cool-white-100 bg-primary-100"
                    />
                    <ButtonPrimary
                      text="You are Owed: ₦0"
                      style="min-w-[100px]  px-3 sm:px-6 text-[12px] sm:text-[16px] rounded-md text-cool-white-100 bg-primary-100"
                    />
                  </div>
                </div>

                {/* ----------- right */}
                <div className="flex-1 flex items-center justify-end gap-2">
                  <div className="text-[36px]">₦{item.amount}</div>
                  <Link  className="w-[40px] h-40px] shadow-md p-2 border hover:scale-125 transition-all duration-300"> <img
                        src={arrowRight}
                        alt="icon"
                        className="h-[24px] w-[26px]"
                      /></Link>
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
