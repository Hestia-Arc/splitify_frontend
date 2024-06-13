import { createSlice } from "@reduxjs/toolkit";


const friendSlice = createSlice({
  name: "friends",
  initialState: {
    friends: [],
    friend: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearANote: (state) => {
      state.getANote = null;
    },
    
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllNotes.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getAllNotes.fulfilled, (state, action) => {
//         state.loading = false;
//         state.allNotes = action.payload;
//       })
//       .addCase(getAllNotes.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       // ----------note by id
//       .addCase(getNoteById.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getNoteById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.getANote = action.payload;
//         // console.log(`in note slice ${action.payload}`);
//       })
//       .addCase(getNoteById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       // ------------ create a note
//       .addCase(createNote.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(createNote.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(createNote.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       // ------------ delete a note
//       .addCase(deleteNote.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(deleteNote.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(deleteNote.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       // --------------- update a note
//       .addCase(updateNote.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(updateNote.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(updateNote.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

     
//   },
});

export const { clearANote,  } = friendSlice.actions;

export default friendSlice?.reducer;

