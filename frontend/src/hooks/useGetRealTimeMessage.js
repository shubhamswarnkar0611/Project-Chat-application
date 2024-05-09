import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessages } from "../store/messageSlice";

const useGetRealTimeMessage = () => {
  const dispatch = useDispatch();
  const { socket } = useSelector((store) => store.socket);
  const { message } = useSelector((store) => store.message); // Assuming messages is the array of messages

  useEffect(() => {
    console.log(message, "Messages");

    socket?.on("newMessage", (newMessage) => {
      console.log(newMessage, "New Message");
      dispatch(setMessages([...message, newMessage]));
    });
  }, [socket, message, setMessages]);
};

export default useGetRealTimeMessage;
