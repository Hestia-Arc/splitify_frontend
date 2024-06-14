import { createSlice } from "@reduxjs/toolkit";
import { getAllFriend } from "../actions/friends/getAllFriend";
import { createFriend } from "../actions/friends/createFriend";
import { deleteFriend } from "../actions/friends/deleteFriend";


const friendSlice = createSlice({
  name: "friends",
  initialState: {
    friends: [],
    friend: null,
    loading: false,
    error: null,
  },
  reducers: {
    aFriend: (state) => {
      state= null;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllFriend.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllFriend.fulfilled, (state, action) => {
        state.loading = false;
        state.friends = action.payload;
      })
      .addCase(getAllFriend.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    
      // ------------ create 
      .addCase(createFriend.pending, (state) => {
        state.loading = true;
      })
      .addCase(createFriend.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createFriend.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ------------ delete a note
      .addCase(deleteFriend.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteFriend.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteFriend.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

     
  },
});

export const { aFriend,  } = friendSlice.actions;

export default friendSlice?.reducer;

