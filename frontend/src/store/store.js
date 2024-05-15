import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import messageReducer from "./messageSlice"
import socketReducer from "./socketSlice"
import groupReducer from "./groupSlice";
import groupMessageSlice from "./groupMessageSlice";


const store = configureStore({
    reducer: {
        user:userReducer,
        message:messageReducer,
        socket:socketReducer,
        group:groupReducer,
        groupMessage:groupMessageSlice
    }
})

export default store;