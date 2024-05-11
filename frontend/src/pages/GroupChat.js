import React from "react";
import ListGroups from "../components/GroupChatComponents/ListGroups";
import GroupChatContent from "../components/GroupChatComponents/GroupChatContent";

const GroupChat = () => {
  return (
    <div className="w-[80vw] flex justify-center items-center  h-[100vh] ">
      <div className="  bg-#fdfcf3 w-[72vw] h-[96vh] rounded-3xl flex justify-center items-center ">
        <ListGroups title={"Group Chats"} />
        <GroupChatContent />
      </div>
    </div>
  );
};

export default GroupChat;
