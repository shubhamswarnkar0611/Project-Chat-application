import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.message = action.payload;
    }
    
  },
});

export const { setMessages } = messageSlice.actions;
export default messageSlice.reducer;