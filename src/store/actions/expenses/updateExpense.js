import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../../client";
import { API_UPDATE_EXPENSE } from "../../api";
import { toast } from "react-toastify";
import { getAllExpense } from "./getAllExpense";

export const updateExpense = createAsyncThunk(
  "expenses/update",
  async (data, { dispatch }) => {
    try {
      const response = await Client({
        method: "PATCH",
        path: `${API_UPDATE_EXPENSE}${data?.id}`,
        data: data?.newUpdate,
      });
      toast.success("Expense successfully updated.");
      dispatch(getAllExpense());

      // return response?.data
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
);
