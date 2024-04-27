import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUserDetails: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getCurrentUser: (state, action) => {
      state.currentUserDetails = action.payload;
    },
  },
});

export const { getCurrentUser } = userSlice.actions;
export default userSlice.reducer;
