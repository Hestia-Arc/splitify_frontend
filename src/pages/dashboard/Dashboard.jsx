import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
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
      <main className=" h-full relative flex-grow overflow-y-scroll bg-cool-white-100 w-[90%]">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
