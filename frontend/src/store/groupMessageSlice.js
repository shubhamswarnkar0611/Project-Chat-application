import { createSlice } from "@reduxjs/toolkit";

const initialState={
    GroupMessage:null
}

const groupMessageSlice = createSlice({
    name:"groupmessage",
    initialState,
    reducers:{
        setGroupMessage: function(state, action) {
            state.GroupMessage=action.payload
        }
    }
})
export const {setGroupMessage}=groupMessageSlice.actions
export default groupMessageSlice.reducer