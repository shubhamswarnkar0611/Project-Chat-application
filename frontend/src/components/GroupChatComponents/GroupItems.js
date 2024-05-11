import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedGroup } from "../../store/groupSlice";
import { setMessages } from "../../store/messageSlice";
import apiService from "../../services/Api";

const GroupItems = ({ group }) => {
  let AllMessages = [];
  const { selectedGroupDetails } = useSelector((store) => store.group);
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const dispatch = useDispatch();

  function handleSelectedGroup(group) {
    dispatch(setSelectedGroup(group));
    fetchMessages(group);
  }
  async function fetchMessages(selectedGroup) {
    try {
      AllMessages = await apiService.getAllGroupMessages(
        currentUserData.id,
        selectedGroup.id
      );
      console.log(AllMessages,"working")
        if (AllMessages) {
          dispatch(setMessages(AllMessages.data));
        }
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <li
        onClick={() => handleSelectedGroup(group)}
        class={`flex justify-between items-center py-3 px-2 hover:shadow-2xl rounded-2xl cursor-pointer transition ${
          selectedGroupDetails && selectedGroupDetails.id === group.id
            ? "bg-neutral-800 text-#fdfcf3 "
            : "text-#3C3B34"
        }`}
      >
        <div class="flex ">
          <div class="relative me-4">
            <img
              src="https://i.imgur.com/aq39RMA.jpg"
              width="40"
              height="40"
              class={`rounded-full border-2 `}
            />
          </div>

          <div class="flex flex-col ml-2">
            <span class="font-medium  ">{group.name}</span>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-gray-400 text-sm">11:26</span>
        </div>
      </li>
      <hr></hr>
    </>
  );
};

export default GroupItems;
