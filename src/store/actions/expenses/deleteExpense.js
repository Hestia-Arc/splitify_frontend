import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../../client";
import { API_DELETE_EXPENSE} from "../../api";
import { toast } from "react-toastify";
import { getAllExpense} from "./getAllExpense";

export const deleteExpense = createAsyncThunk(
  "expenses/delete",
  async ({dataEx, callback}, { dispatch }) => {
    try {
      const response = await Client({
        method: "DELETE",
        path: `${API_DELETE_EXPENSE}${dataEx.owner}/${dataEx.item}`,
      });
      toast.success("Expense deleted successfully.");
      dispatch(getAllExpense());
      callback();
      return response?.data;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
);
