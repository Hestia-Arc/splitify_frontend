import React, { useState, useEffect } from "react";
import { sectionLayout } from "../../utils/sections";
import { FaPlus } from "react-icons/fa6";
import { MdGroupAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllFriend } from "../../store/actions/friends/getAllFriend";

const Friends = () => {
  const { friends } = useSelector((state) => state?.friends);
  const userID = localStorage.getItem("splitifyUser");
  const parID = JSON.parse(userID);
  const dispatch = useDispatch();

  // console.log(parID.id)

  // console.log(friends);
  useEffect(() => {
    dispatch(getAllFriend(parID.id));
  }, []);

  return (
    <div className={sectionLayout}>
      {/* ===================== NO FRIENDS */}
      {friends?.length === 0 ? (
        <div className="h-[400px] flex justify-center items-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="text-center">
              <p className="font-bold text-[28px] ">
                You have no friends added.
              </p>

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
              <p>Add Friend</p>
            </Link>
          </div>
        </div>
      ) : (
        // ============================ FRIENDS LIST
        <div className="">
          {/* ============== button */}
          <div className="flex justify-end">
            <Link to="addfriend">
              <button
                className={`h-[48px] w-[180px] text-cool-white-100 bg-primary-100   flex justify-center items-center font-semibold rounded`}
              >
                <p className="flex items-center gap-2">
                  {<FaPlus />} Add Friend
                </p>
              </button>
            </Link>
          </div>

          {/* ================ list */}
          <div className="flex flex-wrap gap-8  mt-8 text-[22px]">
            {friends.map((friend, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 items-center justify-center"
              >
                <div className="p-2 border border-rose-200 shadow rounded-full">
                  <div className="h-[110px] w-[110px] sm:h-[170px] sm:w-[170px] text-[2.5rem] font-bold flex justify-center items-center rounded-full border bg-gray-300 shadow-lg ">
                    {friend.name.slice(0, 1)}
                  </div>
                </div>

                <p className="text-center text-[14px]  sm:text-[15px] ">
                  {friend.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Friends;
