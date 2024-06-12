import { useState } from "react";
import { FaPowerOff, FaWallet, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdOutlineGroups,
  MdOutlineSettings,
  MdMenu,
} from "react-icons/md";

const Sidebar = () => {
  const menuItem = [
    {
      name: "Dashboard",
      path: "./",
      icon: <MdDashboard className="w-8 h-8" />,
    },

    {
      name: "Friends",
      path: "friends",
      icon: <FaUserFriends className="w-8 h-8" />,
    },
    {
      name: "Expenses",
      path: "expenses",
      icon: < FaWallet className="w-8 h-8" />,
    },
    {
      name: "Setting",
      path: "setting",
      icon: <MdOutlineSettings className="w-8 h-8 " />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <div
      className={` h-full bg-primary-10 ${
        isOpen ? "w-[150px] sm:w-[230px] " : "w-[58px] sm:w-[90px] "
      }  px-2 border-r transition-all duration-300`}
    >
      {/* =============== LOGO  TOGGLE */}
      <div className="h-[70px] w-full flex items-center justify-between px-2 ">
        <span
          className={`${
            isOpen ? "block" : "hidden "
          } font-bold text-[1.5rem] transition-all `}
        >
          Splitify
        </span>
        <div
          onClick={toggleIsOpen}
          className={`text-primary-100 hover:text-white hover:bg-primary-100 cursor-pointer z-20 p-1 rounded-md `}
        >
          <MdMenu className="w-8 h-8" />
        </div>
      </div>

      {/* ========================px-3 py-2 LIST */}
      <div className=" h-[450px] flex flex-col gap-4 mt-10">
        {menuItem.map((item, index) => (
          <Link
            className={`h-[48px] flex items-center ${
              isOpen ? "justify-start" : "justify-center"
            }  gap-4 hover:bg-primary-50 hover:p-1 hover:font-extrabold rounded-md `}
            key={index}
            to={item.path}
            // onClick={toggleIsOpen}
          >
            <div className="text-primary-100 flex items-center justify-center hover:text-white p-1 w-9 h-9 rounded-md  hover:bg-primary-100 ">
              {item.icon}
            </div>
            <span
              className={`${isOpen ? "block" : "hidden"} text-[20px] font-medium
             `}
            >
              {" "}
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      {/* ==================== LOGOUT */}
      <div
        className={` h-[48px] flex items-center  ${
          isOpen ? "justify-start" : "justify-center"
        }  gap-4 mb-4 hover:bg-primary-50 
             rounded-md `}
      >
        <div className="text-primary-100 flex items-center justify-center hover:text-white p-1  rounded-md  hover:bg-primary-100 ">
          <FaPowerOff className=" w-6 h-6 " />
        </div>
        <span
          className={`${isOpen ? "block" : "hidden"} text-[18px] font-medium`}
        >
          Log out
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
