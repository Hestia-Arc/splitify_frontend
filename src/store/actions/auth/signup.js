import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../../client";
import { toast } from "react-toastify";
import { API_REGISTER } from "../../api";

export const signup = createAsyncThunk(
  "sign-up/create",
  async ({data, callback}, { rejectWithValue }) => {
    try {
      const response = await Client({
        method: "POST",
        path: `${API_REGISTER}`,
        data: data,
      });

      toast.success("Signup successful.");
      callback();
      return response?.data;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
);
