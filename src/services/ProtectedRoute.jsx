import React from "react";
import { Outlet, Navigate } from "react-router-dom";
// import useAuth from "../features/authentication/AuthContext";

function ProtectedRoute() {
  const isLoggedIn = true;

  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  // console.log(token, isAuthenticated);

  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoute;
