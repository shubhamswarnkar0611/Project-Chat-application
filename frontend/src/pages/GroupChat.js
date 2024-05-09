import React, { useEffect, useState } from "react";
import ListOtherUser from "../components/ListOtherUser";
import ChatContent from "../components/ChatContent";
import ListGroups from "../components/ListGroups";

const GroupChat = () => {
  return (
    <div className="w-[80vw] flex justify-center items-center  h-[100vh] ">
      <div className="  bg-#fdfcf3 w-[72vw] h-[96vh] rounded-3xl flex justify-center items-center ">
        <ListGroups title={"Group Chats"} />
        <ChatContent />
      </div>
    </div>
  );
};

export default GroupChat;
