import React from "react";
import ListOtherUser from "../components/PrivateChatComponents/ListOtherUser";
import ChatContent from "../components/PrivateChatComponents/ChatContent";

const PrivateChat = () => {
  return (
    <div className="w-[80vw] flex justify-center items-center  h-[100vh] ">
      <div className="  bg-#fdfcf3 w-[72vw] h-[96vh] rounded-3xl flex justify-center items-center ">
        <ListOtherUser title={"Chats"} />
        <ChatContent />
      </div>
    </div>
  );
};

export default PrivateChat;
