import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListGroups from "../components/GroupChatComponents/ListGroups";
import GroupChatContent from "../components/GroupChatComponents/GroupChatContent";
import apiService from "../services/Api";
import { setUsers } from "../store/userSlice";

const GroupChat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchAllUser() {
      const result = await apiService.getAllUsers();
      dispatch(setUsers(result.data));
    }
    fetchAllUser();
  }, []);
  return (
    <div className="lg:w-[80vw]  w-[97vw] flex justify-center lg:items-center items-start h-[80vh] lg:h-[100vh]  ">
      <div className="  bg-#fdfcf3 w-[95vw] lg:w-[60vw] xl:w-[69vw] h-[78vh] lg:h-[96vh] rounded-3xl flex flex-col lg:flex-row justify-start lg:items-center  ">
        <ListGroups title={"Group Chats"} />
        <GroupChatContent />
      </div>
    </div>
  );
};

export default GroupChat;
