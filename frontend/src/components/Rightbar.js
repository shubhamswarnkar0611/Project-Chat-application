import React from "react";
import { MdEmail, MdLogout, MdPhone } from "react-icons/md";
import { useSelector } from "react-redux";

const Rightbar = () => {
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  function handleLogout(){
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div className="w-[25vw] h-[100vh] flex justify-center items-center ">
      <div className="  bg-#fdfcf3 min-w-[17.5vw] h-[96vh] rounded-3xl flex flex-col justify-start items-center">
        <div className="h-[10vh] mt-10 flex justify-center items-center">
          <img
            src="https://i.imgur.com/aq39RMA.jpg"
            width="100"
            height="100"
            className="rounded-full ml-7 border-4 border-white shadow-xl"
          />
        </div>
        <div className="mt-6">
          <p className="text-xl text-#3C3B34 font-bold ml-4">
            {currentUserData.firstName} {currentUserData.lastName}{" "}
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center  py-4 min-w-[40vh]">
          <div className="text-gray-800 font-semibold flex items-center mx-6 bg-white shadow-lg mb-3 p-3 rounded-lg ">
            <MdEmail className="scale-125 mr-2" />
            <p>{currentUserData.email}</p>
          </div>
          <div className="text-gray-800 font-semibold flex items-center mx-6 bg-white shadow-lg p-3 rounded-lg mb-3">
            <MdPhone className="scale-125 mr-2" />
            <p>{currentUserData.phone}</p>
          </div>
          <button className="text-gray-800 font-semibold flex items-center mx-6 bg-white shadow-lg p-3 rounded-lg hover:bg-red-400 "
          onClick={handleLogout}>
            <MdLogout className="scale-125 mr-2" />
            <p>Logout</p>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
