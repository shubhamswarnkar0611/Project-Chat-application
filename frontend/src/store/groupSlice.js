import { createSlice } from "@reduxjs/toolkit";
import { setGroupMessage } from "./groupMessageSlice";

const initialState = {
  selectedGroupDetails: null,
  selectedUserIdToCreateGroupData: [],
  groupMember: null,
  currentUserIsAdmin: false,
  remainingUsers: null,
};

const groupSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedGroup: (state, action) => {
      state.selectedGroupDetails = action.payload;
    },
    setSelectedUserToCreateGroup: (state, action) => {
      state.selectedUserIdToCreateGroupData = action.payload;
    },
    setGroupMembers: (state, action) => {
      state.groupMember = action.payload;
    },
    setCurrentUserIsAdmin: (state, action) => {
      state.currentUserIsAdmin = action.payload;
    },
    setReaminingUser: (state, action) => {
      state.remainingUsers = action.payload;
    }
  },
});

export const {
  setSelectedGroup,
  setSelectedUserToCreateGroup,
  setGroupMembers,
  setCurrentUserIsAdmin,
  setReaminingUser
} = groupSlice.actions;
export default groupSlice.reducer;
