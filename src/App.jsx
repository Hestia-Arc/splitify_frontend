import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./components/dashboard/Overview";
import Expense from "./components/dashboard/Expense";
import Friends from "./components/dashboard/Friends";
import Groups from "./components/dashboard/Groups";
import Setting from "./components/dashboard/Setting";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./services/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div className="h-screen font-lato  min-w-[375px] max-w-[767px] sm:min-w-[768px] sm:max-w-[1023px] lg:mx-auto lg:min-w-[1300px] lg:max-w-[1440px] ">
          {/* <div className="h-screen mx-auto xs:min-w-[374px] xs:max-w-[375px] sm:mx-auto lg:min-w-[1300px] lg:max-w-[1440px]"> */}

      <Routes>
        {/* ================== PUBLIC ROUTES */}
        <Route path="/" element={<LandingPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound/>} />

        {/* <Route path="passreset" element={<PassReset />} /> */}
        {/* <Route path="newpassword" element={<NewPassword />} /> */}

        {/* =================== PROTECTED ROUTES */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path="expense" element={<Expense />} />
            <Route path="friends" element={<Friends />} />
            <Route path="groups" element={<Groups />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
