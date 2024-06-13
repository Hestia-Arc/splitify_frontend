import { Client } from "../../../client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API_USER } from "../../api";

export const userAccount = createAsyncThunk(
  "userAccount",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await Client({
        method: "GET",
        path: API_USER,
      });

      // console.log(response.data);
      return response?.data;
    } catch (error) {
      toast.error("Unauthorized. Access denied");
      return rejectWithValue(
        error.response?.data || "Unauthorized. Access denied"
      );
    }
  }
);
