import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../../client";
import { API_CREATE_EXPENSE } from "../../api";
import { toast } from "react-toastify";
import { getAllExpense } from "./getAllExpense";

export const createExpense = createAsyncThunk(
  "expenses/create",
  async (data, { dispatch }) => {
    try {
      const response = await Client({
        method: "POST",
        path: `${API_CREATE_EXPENSE}`,
        data: data,
      });
      toast.success("Expense created successfully");
      dispatch(getAllExpense());

      return response?.data;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
);
