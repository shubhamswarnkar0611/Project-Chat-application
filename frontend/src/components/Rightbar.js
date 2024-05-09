import React from "react";
import { MdEmail, MdLogout, MdPhone } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";
import { setSelectedUser } from "../store/userSlice";
import { setMessages } from "../store/messageSlice";
import { Link, useNavigate } from "react-router-dom";

const Rightbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const {socket} = useSelector((store) => store.socket);
  
  function handleLogout() {
    socket.disconnect();
    localStorage.removeItem("token");
    dispatch(setSelectedUser(null))
    dispatch(setMessages(null))
    navigate("/login");
  }
  return (
    <div className="w-[24vw] h-[100vh] flex justify-center items-center ">
      <div className="  bg-#fdfcf3 min-w-[17.5vw]  h-[96vh] rounded-3xl flex flex-col justify-start items-center">
        <div className="h-[10vh] mt-10 flex justify-center items-center">
          <img
            src="https://i.imgur.com/aq39RMA.jpg"
            width="100"
            height="100"
            className="rounded-full ml-7 border-4 border-white shadow-xl"
          />
        </div>
        <div className="mt-6 flex justify-center">
          <p className="text-xl text-#3C3B34 font-bold ">
            {currentUserData.firstName} {currentUserData.lastName}{" "}
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center  py-4 min-w-[40vh]">
          <div className="">
            <div className="text-#fdfcf3 font-semibold flex items-center mx-6 bg-#1D201D shadow-lg mb-3 p-3 rounded-lg hover:scale-105">
              <MdEmail className="scale-125 mr-2 " />
              <p>{currentUserData.email}</p>
            </div>
            <div className="text-#fdfcf3 font-semibold flex items-center mx-6  bg-#1D201D shadow-lg p-3 rounded-lg mb-3 hover:scale-105">
              <MdPhone className="scale-125 mr-2" />
              <p>{currentUserData.phone}</p>
            </div>
          </div>
          <button
            className="text-gray-800 font-semibold flex items-center mx-6 bg-red-500 shadow-lg p-3 rounded-lg hover:bg-red-400 hover:scale-105 "
            onClick={handleLogout}
          >
            <MdLogout className="scale-125 mr-2" />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
