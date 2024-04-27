import React from "react";
import ListMainComponent from "../components/ListMainComponent";
import ChatContent from "../components/ChatContent";

const GroupChat = () => {
  return (
    <div className="  bg-#fdfcf3 w-[72vw] h-[96vh] rounded-3xl flex justify-center items-center ">
      <ListMainComponent />
      <ChatContent />
    </div>
  );
};

export default GroupChat;
