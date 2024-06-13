import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../../client";
import { API_GET_ALL_EXPENSES } from "../../api";

export const getAllExpense = createAsyncThunk("allExpenses", async () => {
  try {
    const response = await Client({
      method: "GET",
      path: `${API_GET_ALL_EXPENSES}`,
    });
    return response?.data.notes;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
});
