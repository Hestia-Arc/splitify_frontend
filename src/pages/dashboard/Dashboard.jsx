import React, { useContext } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import ThemeContext from "../../components/dashboard/ThemeContext";

function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="h-screen flex ">
      {/* // <div className="mx-auto flex xs:min-w-[374px] xs:max-w-[375px] lg:mx-auto lg:min-w-[1300px] lg:max-w-[1440px]"> */}
      {/* ----------------------------- */}
      {/* SIDEBAR */}
      {/* ----------------------------- */}
      <Sidebar />

      {/* -------------------------- */}
      {/* MAIN */}
      {/* -------------------------- */}
      <main
        className={`${
          isDarkMode ? "bg-gray-900 text-white" : "bg-cool-white-100"
        }  h-full relative flex-grow overflow-y-scroll w-[90%]`}
      >
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
