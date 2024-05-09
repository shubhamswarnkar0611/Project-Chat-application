import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import messageReducer from "./messageSlice"
import socketReducer from "./socketSlice"

const store = configureStore({
    reducer: {
        user:userReducer,
        message:messageReducer,
        socket:socketReducer
    }
})

export default store;