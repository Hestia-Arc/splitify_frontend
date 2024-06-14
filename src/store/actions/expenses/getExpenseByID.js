import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../../client";
import { API_GET_EXPENSE_BY_ID } from "../../api";

export const getExpenseById = createAsyncThunk(
  "expenses/id",
  async ({dataEx, callback}, { dispatch }) => {
    try {
      const response = await Client({
        method: "GET",
        path: `${API_GET_EXPENSE_BY_ID}${dataEx.owner}/${dataEx.item}`,
      });

      // console.log(response)
      callback();
      return response?.data?.data;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
);
