import React from "react";
import { sectionLayout } from "../../utils/sections";
import { MdGroupAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Groups = () => {
  const eventArray = [
    {
      eventTitle: "Self Care",
      description: "For monthly self care activities with Amah and Leana",
      category: "Others",
    },
    {
      eventTitle: "Maldives Trip",
      description:
        "A girls trip to maldives with 5 friends; Leana, Fatima, Rahma, Ruth and Amah",
      category: "Travelled",
    },
  ];
  return (
    <div className={sectionLayout}>
      <div className="flex flex-col gap-10 items-start">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10 mb-8 ">
          {eventArray.map((event, index) => (
            <div key={index} className="w-full max-w-sm  text-white ">
              <div className="p-4 bg-primary-100 rounded-sm ">
                <div>
                  <p>{event.eventTitle}</p>
                  <p>{event.description}</p>
                </div>
              </div>
              <div className="p-4 bg-white  rounded-b-[20px] relative shadow-md">
                <div className="flex justify-between mb-4  pb-2">
                  <span className=" bg-primary-50 p-2 rounded-md text-red">
                    Owing: ₦20,000
                  </span>
                  <span className="bg-primary-50 text-green p-2 rounded-md ">
                    You are owed: ₦0
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="text-sm font-medium text-gray-700">
                    Category
                  </span>
                  <span className="bg-primary-100 text-white p-2 rounded-md ">
                    {event.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-sm shadow-md   text-black rounded-md flex flex-col items-center justify-center bg-primary-50  h-[150px] sm:h-[150px]">
          <Link to="addgroup">
            <MdGroupAdd className="text-6xl text-primary-100" />
          </Link>

          <p>Create New Group</p>
        </div>
      </div>
    </div>
  );
};

export default Groups;
