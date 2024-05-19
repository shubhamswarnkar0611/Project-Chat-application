import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUserIsAdmin,
  setReaminingUser,
  setSelectedGroup,
} from "../../store/groupSlice";
import { setGroupMessage } from "../../store/groupMessageSlice";
import apiService from "../../services/Api";
import useFetchAllMembers from "../../hooks/useFetchAllMembers"; // Adjust the path as needed

const GroupItems = ({ group }) => {
  const { selectedGroupDetails, groupMember } = useSelector(
    (store) => store.group
  );
 
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const dispatch = useDispatch();
  const fetchAllMembers = useFetchAllMembers();

  const handleSelectedGroup = (group,groupMember,allUsers) => {
    dispatch(setSelectedGroup(group));
    fetchMessages(group);
    fetchAllMembers(group.id);
    fetchCurrentUserIsAdmin(group);

  };

  

  const fetchMessages = async (selectedGroup) => {
    try {
      const allMessages = await apiService.getAllGroupMessages(
        currentUserData.id,
        selectedGroup.id
      );
      console.log(allMessages, "working");
      if (allMessages) {
        dispatch(setGroupMessage(allMessages.data));
      }
    } catch (err) {
      console.error("Error fetching messages:", err.message);
    }
  };

  const fetchCurrentUserIsAdmin = async (group) => {
    try {
      const currentUserIsAdmin = await apiService.getCurrentUserIsAdmin(
        group.id,
        currentUserData.id
      );
      console.log(currentUserIsAdmin, "working");
      dispatch(setCurrentUserIsAdmin(currentUserIsAdmin?.data?.isAdmin));
    } catch (e) {
      console.error("Error fetching admin status:", e.message);
    }
  };

  return (
    <>
      <li
        onClick={() => handleSelectedGroup(group,groupMember)}
        className={`flex justify-between items-center py-3 px-2 hover:shadow-2xl rounded-2xl cursor-pointer w-[270px] xl-[50vw] transition ${
          selectedGroupDetails && selectedGroupDetails.id === group.id
            ? "bg-neutral-800 text-gray-100"
            : "text-gray-800"
        } hover:bg-gray-700 hover:text-gray-100 mx-1`}
      >
        <div className="flex items-start">
          <div className="relative mr-2">
            <img
              src="https://i.imgur.com/aq39RMA.jpg"
              width="40"
              height="40"
              className="rounded-full border-2"
              alt="Group"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium">{group.name}</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="hidden text-gray-400 text-sm">11:26</span>
        </div>
      </li>
      <hr />
    </>
  );
};

export default GroupItems;
