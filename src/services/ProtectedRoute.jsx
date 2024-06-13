import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from 'js-cookie';


function ProtectedRoute() {
  const [token, setToken] = useState(Cookies.get("accessTokenSCA")); 

  useEffect(() => {
    setToken(!!Cookies.get("accessTokenSCA")); 
  }, []);

    // const isLoggedIn = localStorage.getItem("isLoggedIn");
  // console.log(token, isAuthenticated);
  // return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;


  return token ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoute;
