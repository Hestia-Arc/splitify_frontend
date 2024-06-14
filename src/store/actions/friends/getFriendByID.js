import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../../client";
import { API_GET_EXPENSE_BY_ID } from "../../api";

export const getExpenseById = createAsyncThunk(
  "expenses/id",
  async (id, { dispatch }) => {
    try {
      const response = await Client({
        method: "GET",
        path: `${API_GET_EXPENSE_BY_ID}${id}`,
      });
      return response?.data;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
);
