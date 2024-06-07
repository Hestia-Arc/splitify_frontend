import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Expense from "./pages/Expense";
import Friends from "./pages/Friends";
import Groups from "./pages/Groups";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className=" w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
