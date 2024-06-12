import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./components/dashboard/Overview";
import Friends from "./components/dashboard/Friends";
import AddFriend from "./components/dashboard/AddFriend";
import Setting from "./components/dashboard/Setting";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./services/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
import Expenses from "./components/dashboard/Expenses";
import AddExpense from "./components/dashboard/AddExpense";

const App = () => {
  return (
    <div className="h-screen font-lato  min-w-[375px] max-w-[767px] sm:min-w-[768px] sm:max-w-[1023px] lg:mx-auto lg:min-w-[1300px] lg:max-w-[1440px] ">
      {/* <div className="h-screen mx-auto xs:min-w-[374px] xs:max-w-[375px] sm:mx-auto lg:min-w-[1300px] lg:max-w-[1440px]"> */}

      <Routes>
        {/* ================== PUBLIC ROUTES */}
        <Route path="/" element={<LandingPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />

        {/* <Route path="passreset" element={<PassReset />} /> */}
        {/* <Route path="newpassword" element={<NewPassword />} /> */}

        {/* =================== PROTECTED ROUTES */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path="friends" element={<Friends />} />
            <Route path="friends/addfriend" element={<AddFriend />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="expenses/addexpense" element={<AddExpense />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
