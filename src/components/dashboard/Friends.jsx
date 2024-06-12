import React, { useState, useEffect } from "react";
import { sectionLayout } from "../../utils/sections";
import { FaPlus } from "react-icons/fa6";
import { MdGroupAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Friends = () => {
  const [friendArray, setFriendArray] = useState([
    // { img: "", name: "Rohimat" },
    // { img: "", name: "Ife" },
    // { img: "", name: "John" },
    // { img: "", name: "Jamiu" },
    // { img: "", name: "Rohimat" },
    // { img: "", name: "Ife" },
    // { img: "", name: "John" },
    // { img: "", name: "Jamiu" },
  ]);

  const [initialFriends, setInitialFriends] = useState(true);

  useEffect(() => {
    if (friendArray.length > 0) {
      setInitialFriends(false);
    }
  }, [friendArray.length]);

  return (
    <div className={sectionLayout}>
      {/* ===================== NO FRIENDS */}
      {initialFriends ? (
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
            {friendArray.map((friend, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="h-[170px] w-[170px] rounded-full bg-gray-500 border-none">
                  {friend.img}
                </div>
                <p className="text-center">{friend.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Friends;
