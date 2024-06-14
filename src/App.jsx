import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Overview = lazy(() => import("./components/dashboard/Overview"));
const Friends = lazy(() => import("./components/dashboard/Friends"));
const AddFriend = lazy(() => import("./components/dashboard/AddFriend"));
const Setting = lazy(() => import("./components/dashboard/Setting"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const ProtectedRoute = lazy(() => import("./services/ProtectedRoute"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Expenses = lazy(() => import("./components/dashboard/Expenses"));
const AddExpense = lazy(() => import("./components/dashboard/AddExpense"));
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DetailExpense = lazy(() => import("./components/dashboard/DetailExpense"));

const App = () => {
  return (
    <div className="h-screen font-lato  min-w-[375px] max-w-[767px] sm:min-w-[768px] sm:max-w-[1023px] lg:mx-auto lg:min-w-[1300px] lg:max-w-[1440px] ">
      {/* <div className="h-screen mx-auto xs:min-w-[374px] xs:max-w-[375px] sm:mx-auto lg:min-w-[1300px] lg:max-w-[1440px]"> */}

      <Suspense fallback={null}>
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
              <Route path="expenses/detailexpense" element={<DetailExpense />} />
              <Route path="setting" element={<Setting />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        ltr={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
