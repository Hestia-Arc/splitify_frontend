import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../../client";
import { API_GET_ALL_EXPENSES } from "../../api";

export const getAllExpense = createAsyncThunk("allExpenses", async (id) => {
  try {
    const response = await Client({
      method: "GET",
      path: `${API_GET_ALL_EXPENSES}${id}`,
    });
    return response?.data?.data;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
});
