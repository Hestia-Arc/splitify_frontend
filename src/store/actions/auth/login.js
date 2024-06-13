import { Client } from "../../../client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { API_LOGIN } from "../../api";

export const login = createAsyncThunk(
  "login",
  async ({ data, callback }, { dispatch, rejectWithValue }) => {
    try {
      const response = await Client({
        method: "POST",
        path: API_LOGIN,
        data,
      });

      // console.log(response.data.data.jwt.token)
      if (response.data && response.data.data.jwt.token) {
        const { jwt, user } = response?.data.data;
        // Store access token in a cookie with an expiry time (7 days in this example)
        localStorage.setItem("splitifyUser", JSON.stringify(user));
        Cookies.set("accessTokenSCA", jwt.token, { expires: 7 });
        callback();
        return response?.data;
      } else {
        toast.error("Login failed: Access token not found in the response");
        return rejectWithValue("Access token not found in the response");
      }

      // -------------------
      // toast.success("Login successful.");
      // callback();
      // return response?.data;
    } catch (error) {
      toast.error("Login failed: Invalid email or password");
      return rejectWithValue(
        error.response?.data || "An unexpected error occurred"
      );
    }
  }
);
