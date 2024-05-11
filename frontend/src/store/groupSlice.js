import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGroupDetails: null,
};

const groupSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedGroup: (state, action) => {
      state.selectedGroupDetails = action.payload;
    },
  },
});

export const { setSelectedGroup } = groupSlice.actions;
export default groupSlice.reducer;