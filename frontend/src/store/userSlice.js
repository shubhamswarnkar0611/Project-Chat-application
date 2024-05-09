import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUserDetails: null,
  selectedUserDetails: null,
  onlineUser:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getCurrentUser: (state, action) => {
      state.currentUserDetails = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUserDetails = action.payload;
    },
    setOnlineUser:(state, action) => {
        state.onlineUser=action.payload
    }
  },
});

export const { getCurrentUser, setSelectedUser,setOnlineUser } = userSlice.actions;
export default userSlice.reducer;
