import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const usersSlice = createSlice({
  name: "currenUser",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const selectUser = (state) => state.currentUser;
export const { getUser } = usersSlice.actions;

export default usersSlice.reducer;
