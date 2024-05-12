import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGroupDetails: null,
  selectedUserIdToCreateGroupData:[]
};

const groupSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedGroup: (state, action) => {
      state.selectedGroupDetails = action.payload;
    },
    setSelectedUserToCreateGroup:(state, action) => {
        state.selectedUserIdToCreateGroupData = action.payload;
    }
  },
});

export const { setSelectedGroup,setSelectedUserToCreateGroup } = groupSlice.actions;
export default groupSlice.reducer;