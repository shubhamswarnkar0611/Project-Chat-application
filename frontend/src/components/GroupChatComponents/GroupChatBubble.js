import React from "react";
import { useSelector } from "react-redux";
import useGetRealTimeMessage from "../../hooks/useGetRealTimeMessage";

const GroupChatBubble = ({ message }) => {
  console.log("mesaage", message);
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const selectedGroupData = useSelector(
    (state) => state.group.selectedGroupDetails
  );
  
  useGetRealTimeMessage();

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

  if (!message) {
    return null; // Render nothing if message is undefined
  }
  return (
    <>
      {currentUserData.id === message.senderId ? (
        <>
          <div className="flex justify-end items-end mr-2 mb-4 ">
            <div
              className={`flex max-w-[80%] min-w-[20%] flex-col rounded-l-2xl rounded-tr-2xl shadow-md bg-#1D201D p-2 md:max-w-[60%] mb-6 mx-3 `}
            >
              <span className="font-semibold text-#fdfcf3 ml-2 ">You</span>
              <div className=" ml-2 pr-2 flex justify-start items-end  ">
                <div className="text-stone-400  text-md ">
                  {message.content}
                </div>
              </div>
              <div className="  flex justify-end items-end ">
                <div className="scale-75 text-neutral-400 ">
                  {formatTime(message.createdAt)}
                </div>
              </div>
            </div>
            <div>
              <div className="h-10 w-10 bg-#3C3B34 ml-auto rounded-full"></div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-end items-end ml-2 mb-4 ">
          <div>
            <div className="h-10 w-10 bg-#3C3B34 ml-auto rounded-full"></div>
          </div>
          <div
            className={`flex max-w-[80%] min-w-[20%] flex-col 2 rounded-r-xl rounded-tl-xl bg-white shadow-md md:max-w-[60%] mr-auto p-2 mx-3 mb-6 `}
          >
            <div className="ml-2 font-semibold ">
              <div className=" text-#3C3B34">
                {`${message?.Sender?.firstName} ${message?.Sender?.lastName}` }
              </div>
            </div>
            <div className=" ml-2 flex items-end justify-start  ">
              <div className="text-stone-600 text-md  ">
              {message.content}
              </div>
            </div>
            <div className="  flex justify-end items-end ">
              <div className="scale-75 text-neutral-600 ">
                {formatTime(message.createdAt)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GroupChatBubble;
