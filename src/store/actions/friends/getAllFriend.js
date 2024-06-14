import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../../client";
import { API_GET_ALL_FRIENDS } from "../../api";

export const getAllFriend = createAsyncThunk("allFriends", async (id) => {
  try {
    const response = await Client({
      method: "GET",
      path: `${API_GET_ALL_FRIENDS}${id}`,
    });
    // console.log(response.data.data);
    return response?.data?.data;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
});
