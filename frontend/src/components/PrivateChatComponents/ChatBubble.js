import React from "react";
import { useSelector } from "react-redux";
import useGetRealTimeMessage from "../../hooks/useGetRealTimeMessage";

const ChatBubble = ({ message }) => {
  console.log("mesaage", message);
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const selectedUserData = useSelector(
    (state) => state.user.selectedUserDetails
  );

  
  useGetRealTimeMessage();

  function formatTime(timestamp) {
    const currentDate = new Date();
    const messageDate = new Date(timestamp);

   
    const diffInMilliseconds = currentDate.getTime() - messageDate.getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));

    if (diffInMinutes < 1) {
        return "Just now";
    } else if (diffInMinutes === 1) {
        return "1 min ago";
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes} mins ago`;
    } else if (diffInMinutes < 24 * 60) {
        const hours = Math.floor(diffInMinutes / 60);
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (diffInMinutes < 30 * 24 * 60) {
        const days = Math.floor(diffInMinutes / (60 * 24));
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (diffInMinutes < 365 * 24 * 60) {
        const months = Math.floor(diffInMinutes / (30 * 24 * 60));
        return `${months} ${months === 1 ? "month" : "months"} ago`;
    } else {
        const years = Math.floor(diffInMinutes / (365 * 24 * 60));
        return `${years} ${years === 1 ? "year" : "years"} ago`;
    }
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
              {/* <span className="font-semibold text-#fdfcf3 ml-2 ">You</span> */}
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
              <div className="h-10 w-10 ml-auto rounded-full">
              <img
                  src={currentUserData.picture}
                  class={`rounded-full border-2 border-#1D201D w-[2.5vw] h-[5vh]  object-cover `}
                />
            
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-end items-end ml-2 mb-4 ">
          <div>
            <div className="h-10 w-10  ml-auto rounded-full">
            <img
                  src={message?.Sender?.picture}
                  class={`rounded-full border-2 border-#1D201D w-[2.5vw] h-[5vh]  object-cover `}
                />
            </div>
          </div>
          <div
            className={`flex max-w-[80%] min-w-[20%] flex-col 2 rounded-r-xl rounded-tl-xl bg-white shadow-md md:max-w-[60%] mr-auto p-2 mx-3 mb-6 `}
          >
            <div className="ml-2 font-semibold ">
              <div className=" text-#3C3B34">
                {`${selectedUserData.firstName} ${selectedUserData.lastName}`}
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

export default ChatBubble;
