import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../../client";
import { API_DELETE_FRIEND} from "../../api";
import { toast } from "react-toastify";
import { getAllFriend} from "./getAllFriend";

export const deleteFriend = createAsyncThunk(
  "friends/delete",
  async (id, { dispatch }) => {
    try {
      const response = await Client({
        method: "DELETE",
        path: `${API_DELETE_FRIEND}${id}`,
      });
      toast.success("Friend deleted successfully.");
      dispatch(getAllFriend());
      return response?.data;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
);
