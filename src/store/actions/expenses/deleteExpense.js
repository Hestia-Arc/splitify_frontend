import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../../client";
import { API_DELETE_EXPENSE} from "../../api";
import { toast } from "react-toastify";
import { getAllExpense} from "./getAllExpense";

export const deleteExpense = createAsyncThunk(
  "expenses/delete",
  async (id, { dispatch }) => {
    try {
      const response = await Client({
        method: "DELETE",
        path: `${API_DELETE_EXPENSE}${id}`,
      });
      toast.success("Expense deleted successfully.");
      dispatch(getAllExpense());
      return response?.data;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
);
