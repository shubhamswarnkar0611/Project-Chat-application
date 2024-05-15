import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessages } from "../store/messageSlice";
import { setGroupMessage } from "../store/groupMessageSlice";

const useGetRealTimeMessage = () => {
  const dispatch = useDispatch();
  const { socket } = useSelector((store) => store.socket);
  const { message } = useSelector((store) => store.message); // Assuming messages is the array of messages
  const { GroupMessage } = useSelector((store) => store.groupMessage); // Assuming messages is the array of messages

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      dispatch(setMessages([...message, newMessage]));
    });
  }, [socket, message, setMessages]);

  useEffect(() => {
    socket?.on("newGroupMessage", (messagedetails) => {
      dispatch(setGroupMessage([...GroupMessage, messagedetails]));
    });
  }, [socket, GroupMessage, setGroupMessage]);
};

export default useGetRealTimeMessage;
