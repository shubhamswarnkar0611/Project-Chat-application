import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const TypingIndicator = () => {
  const { socket } = useSelector((store) => store.socket);

 
    socket.on("typing", (socket) => {
      console.log("typing", socket.id);
    });
 
};

export default TypingIndicator;
