import { useState } from "react";
import { FaPowerOff, FaWallet, FaUserFriends } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdOutlineGroups,
  MdOutlineSettings,
  MdMenu,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/split-logo.png";
import { logout } from "../store/actions/auth/logout";

const Sidebar = ({isOpen, setIsOpen, toggleIsOpen}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const location = useLocation()

  const menuItem = [
    {
      name: "Overview",
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
      icon: <FaWallet className="w-8 h-8" />,
    },
    {
      name: "Setting",
      path: "setting",
      icon: <MdOutlineSettings className="w-8 h-8 " />,
    },
  ];
 

  return (
    <>
      {/* ================ larger screen */}
      <div
        className={`hidden sm:block h-full bg-primary-10 ${
          isOpen ? "w-[150px] sm:w-[230px] " : "w-[58px] sm:w-[90px] "
        }  px-2 pt-3 border-r transition-all duration-300`}
      >
        {/* =============== LOGO  TOGGLE */}
        <div className="min-h-[58px] w-full flex items-start justify-between px-2 ">
          <div
            className={`${
              isOpen ? "block" : "hidden "
            } font-bold text-[1.5rem] transition-all `}
          >
            <div className="shadow border border-gray-300 p-[2px]  rounded-md">
              <div className=" h-[52px] w-[70px] border  rounded-md   flex justify-center items-center bg-cool-white-100 bg-opacity-70">
                <img src={logo} alt="logo" className="h-[50px] w-[60px]" />
              </div>
            </div>
          </div>

          <div
            onClick={toggleIsOpen}
            className="flex justify-center items-center px-1 border border-gray-300 rounded-md shadow  text-primary-100 hover:text-white hover:bg-primary-100 cursor-pointer z-20 "
          >
            <MdMenu className="w-8 h-8 " />
          </div>
        </div>

        {/* ========================px-3 py-2 LIST */}
        <div className=" h-[450px] flex flex-col gap-4 mt-10">
          {menuItem.map((item, index) => (
            <NavLink
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
                className={`${
                  isOpen ? "block" : "hidden"
                } text-[20px] font-medium
             `}
              >
                {" "}
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>
        {/* ==================== LOGOUT */}
        <div
          onClick={() =>
            dispatch(logout({ callback: () => navigate("/login") }))
          }
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

      {/* =============================================== */}
      {/* ===================== mobile */}
      {/* ============================================= */}
      <div className={` ${isOpen ? "w-[250px] h-[90vh]" : "hidden" } transition-all duration-500 px-2 absolute top-[5%] left-0 z-40 border border-gray-300 rounded-md shadow-lg bg-white sm:hidden`}>
        <div className=" h-[350px] flex flex-col gap-4 mt-10">
          {menuItem.map((item, index) => (
            <Link
              className={`h-[48px] flex items-center ${
                isOpen ? "justify-start" : "justify-center"
              }  gap-4 hover:bg-primary-50 hover:p-1 hover:font-extrabold rounded-md `}
              key={index}
              to={item.path}
              // onClick={toggleIsOpen}
              onClick={() => setIsOpen(false)}

            >
              <div className="text-primary-100 flex items-center justify-center hover:text-white p-1 w-9 h-9 rounded-md  hover:bg-primary-100 ">
                {item.icon}
              </div>
              <span
                className={`${
                  isOpen ? "block" : "hidden"
                } text-[20px] font-medium
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
          onClick={() =>
            dispatch(logout({ callback: () => navigate("/login") }))
          }
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
    </>
  );
};

export default Sidebar;
