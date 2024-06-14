import { createSlice } from "@reduxjs/toolkit";


const toggleSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: true,
    
  },
  reducers: {
    openSide: (state, action) => {
      state.isOpen = action.payload;
    },
    
  },

});

export const { openSide,  } = toggleSlice.actions;

export default toggleSlice?.reducer;

