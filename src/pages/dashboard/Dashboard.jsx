import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import ThemeContext from "../../components/dashboard/ThemeContext";

function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);



  return (
    <div className="h-screen relative flex ">
      {/* // <div className="mx-auto flex xs:min-w-[374px] xs:max-w-[375px] lg:mx-auto lg:min-w-[1300px] lg:max-w-[1440px]"> */}
      {/* ----------------------------- */}
      {/* SIDEBAR */}
      {/* ----------------------------- */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggleIsOpen={toggleIsOpen} />

      {/* -------------------------- */}
      {/* MAIN */}
      {/* -------------------------- */}
      <main
        className={`${
          isDarkMode ? "bg-gray-900 text-white" : "bg-cool-white-100"
        }  h-full relative flex-grow overflow-y-scroll w-[90%]`}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} toggleIsOpen={toggleIsOpen} />
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
