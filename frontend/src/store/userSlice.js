import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUserDetails: null,
  selectedUserDetails: null,
  onlineUser:null,
  allUsers:[]
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
    },
    setUsers:(state, action) => {
      state.allUsers = action.payload
    }
  },
});

export const { getCurrentUser, setSelectedUser,setOnlineUser,setUsers } = userSlice.actions;
export default userSlice.reducer;
