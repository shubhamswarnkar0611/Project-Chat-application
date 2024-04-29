import React from "react";
import { useSelector } from "react-redux";

const ChatBubble = ({ message }) => {
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  console.log(currentUserData);
  console.log(message);

  function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const hours12 = hours % 12 === 0 ? 12 : hours % 12;
    const period = hours < 12 ? "AM" : "PM";
    const formattedTime = `${hours12}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${period}`;

    return formattedTime;
  }
  return (
    <>
      {currentUserData.id === message.UserId ? (
        <div
          className={`flex max-w-[80%] min-w-[20%] flex-col 2 rounded-r-xl rounded-tl-xl shadow-md bg-#1D201D p-2 md:max-w-[60%] ml-auto mx-3 `}
        >
          <span className="font-semibold text-#fdfcf3 scale-90 ">
            You
          </span>
          <div className=" ml-2 flex justify-start items-end  ">
            <div className="text-stone-400  text-md ">{message.message}</div>
          </div>
          <div className="  flex justify-end items-end ">
            <div className="scale-75 text-neutral-400 ">
              {formatTime(message.createdAt)}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`flex max-w-[80%] min-w-[20%] flex-col 2 rounded-r-xl rounded-tl-xl bg-#CACECA shadow-md p-2 md:max-w-[60%] mr-auto `}
        >
          <span className="font-semibold text-#2A344A scale-90 ">
            {message.User.firstName} {message.User.lastName}
          </span>
          <div className=" ml-2 flex justify-start items-end  ">
            <div className="text-stone-600 text-md ">{message.message}</div>
          </div>
          <div className="  flex justify-end items-end ">
            <div className="scale-75 text-neutral-600 ">
              {formatTime(message.createdAt)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubble;
