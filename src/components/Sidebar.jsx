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
    { name: "Dashboard", path: "/", icon: <MdDashboard className="w-8 h-8" /> },
    {
      name: "Expense",
      path: "/expense",
      icon: <FaWallet className="w-8 h-8" />,
    },
    {
      name: "Friends",
      path: "/friends",
      icon: <FaUserFriends className="w-8 h-8" />,
    },
    {
      name: "Groups",
      path: "/groups",
      icon: <MdOutlineGroups className="w-8 h-8" />,
    },
    {
      name: "Setting",
      path: "/setting",
      icon: <MdOutlineSettings className="w-8 h-8 " />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <div
        className={` ${isOpen ? "w-[243px] " : "w-[90px] "} 
  px-5 py-10 flex flex-col items-start  border-r`}
      >
        <div className="mb-40 flex items-center justify-between w-full">
          <span className={`${isOpen ? "block" : "hidden "} `}>
            BillSplitter
          </span>
          <div
            onClick={toggleIsOpen}
            className={`${isOpen ? "ml-20" : "ml-0 "}
             text-primary-100 hover:text-white hover:bg-primary-100 cursor-pointer z-20 p-1 rounded-md `}
          >
            <MdMenu className="w-8 h-8" />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <Link
            className="flex items-center gap-10 px-3 py-2 relative hover:bg-primary-50 
            mb-10 rounded-md
             "
            key={index}
            to={item.path}
            onClick={toggleIsOpen}
          >
            <div className="text-primary-100 flex items-center justify-center hover:text-white p-1 w-8 h-8 rounded-md  hover:bg-primary-100 ">
              {item.icon}
            </div>
            <span className={`${isOpen ? "block" : "hidden" } ml-5
             `}> {item.name}</span>
          </Link>
        ))}
        <div
          className="flex items-center gap-10 p-2 relative hover:bg-primary-50 w-[203px]
            mt-40 rounded-md
            "
        >
          <FaPowerOff className="text-primary-100  w-8 h-8" />
          <span>Log out</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
