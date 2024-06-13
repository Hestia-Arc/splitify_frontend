import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Cookies from 'js-cookie'; 

export const logout = createAsyncThunk(
  "logout",
  async ({callback}, {rejectWithValue }) => {
    try {
      Cookies.remove("accessTokenSCA"); 
      localStorage.removeItem("splitifyUser");
      callback();

    } catch (error) {
      toast.error("Logout failed: An unexpected error occurred");
      return rejectWithValue(
        error.response?.data || "An unexpected error occurred"
      );
    }
  }
);
