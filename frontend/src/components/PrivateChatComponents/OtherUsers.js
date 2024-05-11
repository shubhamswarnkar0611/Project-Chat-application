import React, { useEffect, useState } from "react";
import apiService from "../../services/Api";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../../store/userSlice";
import { setMessages } from "../../store/messageSlice";

const OtherUsers = ({ user }) => {
  const dispatch = useDispatch();
  const selectedUserData = useSelector(
    (state) => state.user.selectedUserDetails
  );
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const onlineUserData = useSelector((state) => state.user.onlineUser);
  const [isOnline, setIsOnline] = useState(false);
  let AllMessages = [];

  useEffect(() => {
    if (onlineUserData != null) {
      setIsOnline(onlineUserData.includes(`${user.id}`));
    }
  }, [onlineUserData, user.id]);

  console.log(isOnline, user.id);

  function setSelectedUserHandler(user) {
    dispatch(setSelectedUser(user));
    fetchMessages(user);
  }
  async function fetchMessages(selectedUser) {
    AllMessages = await apiService.getAllMessages(
      currentUserData.id,
      selectedUser.id
    );
    if (AllMessages){
      dispatch(setMessages(AllMessages.data));
    }
  }
  return (
    <>
      <li
        onClick={() => setSelectedUserHandler(user)}
        class={`flex justify-between items-center py-3 px-2 hover:shadow-2xl rounded-2xl cursor-pointer transition ${
          selectedUserData === user
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
            {isOnline ? (
              <span class="top-0 start-7 absolute w-2.5 h-2.5 bg-green-500  rounded-full"></span>
            ) : (
              <span class="top-0 start-7 absolute w-2.5 h-2.5 bg-red-500  rounded-full"></span>
            )}
          </div>

          <div class="flex flex-col ml-2">
            <span class="font-medium  ">
              {user.firstName} {user.lastName}
            </span>
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

export default OtherUsers;
