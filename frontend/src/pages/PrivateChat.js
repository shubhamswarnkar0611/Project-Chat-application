import React from "react";
import ListOtherUser from "../components/PrivateChatComponents/ListOtherUser";
import ChatContent from "../components/PrivateChatComponents/ChatContent";

const PrivateChat = () => {
  return (
    <div className="lg:w-[80vw]  w-[97vw] flex justify-center lg:items-center items-start h-[80vh] lg:h-[100vh] ">
      <div className="  bg-#fdfcf3 w-[95vw] lg:w-[72vw] h-[78vh] lg:h-[96vh] rounded-3xl flex flex-col lg:flex-row justify-start lg:items-center  ">
        <ListOtherUser title={"Chats"} />
        <ChatContent />
      </div>
    </div>
  );
};

export default PrivateChat;
