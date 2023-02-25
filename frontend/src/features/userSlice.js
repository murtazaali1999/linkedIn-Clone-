import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; /* sets the user */
    },
    logout: (state) => {
      state.user = null; /* sets the user to null */
    },
  },
});

export const { login, logout } = userSlice.actions;


/* selectors */
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
