import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../../client";
import { API_CREATE_FRIEND } from "../../api";
import { toast } from "react-toastify";
import { getAllFriend } from "./getAllFriend";

export const createFriend = createAsyncThunk(
  "friends/create",
  async ({ data, callback }, { dispatch }) => {
    try {
      const response = await Client({
        method: "POST",
        path: `${API_CREATE_FRIEND}${data.owner}`,
        data: data,
      });
      toast.success("Friend created successfully");
      dispatch(getAllFriend());
      callback();
      return response?.data?.data;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
);
