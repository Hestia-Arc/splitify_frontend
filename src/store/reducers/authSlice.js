import { createSlice } from '@reduxjs/toolkit';
import { signup } from '../actions/auth/signup';
import { login } from '../actions/auth/login';
import { logout } from '../actions/auth/logout';
const storedUser = JSON.parse(localStorage.getItem('user'));

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: storedUser || null, 
    loading: false, 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true; 
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false; 
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.error.message;
      })

      // ----------- LOGIN
      .addCase(login.pending, (state) => {
        state.loading = true; 
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false; 
        state.user = action.payload?.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.error.message;
      })

      // ---------- LOGOUT
      .addCase(logout.pending, (state) => {
        state.loading = true; 
      })
      .addCase(logout.fulfilled, (state) => { 
        state.loading = false; 
        state.user = null; 
      })
      .addCase(logout.rejected, (state, action) => { 
        state.loading = false; 
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
