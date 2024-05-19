import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import ChatBubble from "./ChatBubble";
import apiService from "../../services/Api";
import { useSelector, useDispatch } from "react-redux";
import ScrollToBottom from "react-scroll-to-bottom";
import { setMessages } from "../../store/messageSlice";

const ChatContent = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState();
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const selectedUserData = useSelector(
    (state) => state.user.selectedUserDetails
  );


  const getmessage = useSelector((state) => state.message.message);


  async function handleMesssage(e) {
    e.preventDefault();
    console.log(message, currentUserData.id, selectedUserData.id);
    try {
      const Message = await apiService.sendMessage(
        message,
        currentUserData.id,
        selectedUserData.id
      );
      console.log(Message, "working");
      if (Message) {
        dispatch(setMessages([...getmessage, Message.data]));
      }
    } catch (e) {
      console.log(e);
    } finally {
      setMessage("");
    }
  }

  function handleInput(e) {
    e.preventDefault();
    const { value } = e.target;
    setMessage(value);
  }

  return (
    <div className="  lg:w-[67vw] w-[95vw] rounded-2xl lg:h-[89vh] mx-4">
      {selectedUserData && (
        <>
          <div className="lg:h-[10vh] h-[8vh] rounded-xl flex items-center justify-between px-4  ">
            <div className="flex items-center">
              <img
                src={selectedUserData.picture}
                className="rounded-full object-cover w-[40px] h-[40px]"
              />
              <p className="text-xl font-semibold ml-3 text-#1D201D">
                {selectedUserData.firstName} {selectedUserData.lastName}
              </p>
            </div>

            <div className="pr-4">
              <BsThreeDots />
            </div>
          </div>

          <div className="lg:h-[78vh]   ">
            <ScrollToBottom className="lg:h-[70vh] h-[48vh] mx-4  p-4">
              <div class="flex w-full flex-col gap-4 ">
                {getmessage &&
                  getmessage.map((message) => {
                    return <ChatBubble message={message} />;
                  })}
              </div>
            </ScrollToBottom>

            <div className="flex justify-center">
              <form onSubmit={handleMesssage}>
                <div class="relative flex lg:w-[30vw]  scale-90 mt-2 ">
                  <span class="absolute inset-y-0 flex items-center  ">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6 text-gray-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        ></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="text"
                    placeholder="Write your message!"
                    class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 pr-44 bg-white shadow-lg rounded-xl py-3"
                    onChange={(e) => handleInput(e)}
                    id="message"
                    value={message}
                    required
                  />
                  <div class="absolute right-0 justify-center items-center inset-y-0  sm:flex">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6 text-gray-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        ></path>
                      </svg>
                    </button>

                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6 text-gray-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-100 ease-in-out text-white bg-#595f39 hover:bg-#1D201D focus:outline-none "
                    >
                      <span class="font-bold">Send</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-6 w-6 ml-2 transform rotate-90"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatContent;
