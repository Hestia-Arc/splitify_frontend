import { createSlice } from "@reduxjs/toolkit";
import { getAllExpense } from "../actions/expenses/getAllExpense";
import { getExpenseById } from "../actions/expenses/getExpenseByID";
import { createExpense } from "../actions/expenses/createExpense";
import { deleteExpense } from "../actions/expenses/deleteExpense";
import { updateExpense } from "../actions/expenses/updateExpense";


const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
    expense: null,
    loading: false,
    error: null,
  },
  reducers: {
    // oneExpense: (state) => {
    //   state.expense = null;
    // },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllExpense.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses = action.payload;
      })
      .addCase(getAllExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ---------- by id
      .addCase(getExpenseById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExpenseById.fulfilled, (state, action) => {
        state.loading = false;
        state.expense = action.payload;
      })
      .addCase(getExpenseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ------------ create 
      .addCase(createExpense.pending, (state) => {
        state.loading = true;
      })
      .addCase(createExpense.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ------------ delete 
      .addCase(deleteExpense.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteExpense.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // --------------- update 
      .addCase(updateExpense.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateExpense.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

     
  },
});

// export const {   } = expenseSlice.actions;

export default expenseSlice?.reducer;

