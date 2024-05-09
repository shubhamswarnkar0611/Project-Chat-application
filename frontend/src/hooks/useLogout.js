import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { setMessages } from "../store/messageSlice";

// Rename the function to start with "use"
const useLogout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    localStorage.removeItem("token");
    dispatch(setSelectedUser(null));
    dispatch(setMessages(null));
    navigate("/login");
}

export default useLogout;
