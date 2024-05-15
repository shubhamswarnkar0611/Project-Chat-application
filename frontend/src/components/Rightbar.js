import React from "react";
import { MdEmail, MdLogout, MdPeople, MdPhone } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../store/userSlice";
import { setMessages } from "../store/messageSlice";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";

const Rightbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const { groupMember, selectedGroupDetails } = useSelector(
    (state) => state.group
  );
  const { socket } = useSelector((store) => store.socket);

  function handleLogout() {
    socket.disconnect();
    localStorage.removeItem("token");
    dispatch(setSelectedUser(null));
    dispatch(setMessages(null));
    navigate("/login");
  }
  return groupMember ? (
    <div className="w-[24vw] hidden  h-[100vh] lg:flex lg:justify-center lg:items-center ">
      <div className="  bg-#1D201D min-w-[17.5vw]  h-[96vh] rounded-3xl flex flex-col justify-start items-center">
        <div className="h-[5vh] mt-10 flex justify-center items-center w-[5vw] ">
          <img
            src="https://i.imgur.com/aq39RMA.jpg"
            className="rounded-full border-4 border-white shadow-xl object-cover"
          />
        </div>
        <div className="mt-6 flex justify-center">
          <p className="text-xl text-#fdfcf3 font-bold ">
            {selectedGroupDetails.name}
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center  py-4 min-w-[40vh]">
          <div className="">
            <p className="ml-5 mb-5 font-bold text-lg text-#fdfcf3 ">
              {" "}
              Group Members
            </p>

            {groupMember &&
              groupMember.map((member) => {
                return (
                  <div
                    className={` font-semibold flex items-center mx-6 shadow-lg bg-#373730 text-white mb-2 p-2 rounded-3xl hover:scale-105 ${
                      member.isAdmin ? "bg-lime-600" : "bg-#373730"
                    } `}
                  >
                    <FaCircleUser className="text-3xl mr-3 text-gray-400  " />
                    {member.User.id === currentUserData.id ? (
                      <div className="flex justify-between w-full items-center">
                        <p>You</p>
                        {member.isAdmin ? (
                          <p className="text-xs mr-2">Admin</p>
                        ) : null}
                      </div>
                    ) : (
                      <div className="flex justify-between w-full items-center">
                        <p>{`${member?.User.firstName} ${member?.User.lastName}`}</p>
                        {member.isAdmin ? (
                          <p className="text-xs mr-2">Admin</p>
                        ) : null}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
          <button
            className="text-gray-800 font-semibold flex items-center mx-6 bg-red-500 shadow-lg p-3 rounded-lg hover:bg-red-400 hover:scale-105 mt-5 "
            onClick={handleLogout}
          >
            <MdLogout className="scale-125 mr-2" />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-[24vw] hidden  h-[100vh] lg:flex lg:justify-center lg:items-center ">
      <div className="  bg-#1D201D min-w-[17.5vw]  h-[96vh] rounded-3xl flex flex-col justify-start items-center">
        <div className="h-[10vh mt-10 flex justify-center items-center  ">
          <img
            src={currentUserData.picture}
            className="rounded-full w-[7vw] h-[14vh]  border-4 border-white shadow-xl object-cover"
          />
        </div>
        <div className="mt-6 flex justify-center">
          <p className="text-xl text-#fdfcf3 font-bold ">
            {currentUserData.firstName} {currentUserData.lastName}{" "}
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center  py-4 min-w-[40vh]">
          <div className="">
            <div className="text-#fdfcf3 font-semibold flex items-center mx-6 bg-#373730 shadow-lg mb-3 p-3 rounded-lg hover:scale-105">
              <MdEmail className="scale-125 mr-2 " />
              <p>{currentUserData.email}</p>
            </div>
            <div className="text-#fdfcf3 font-semibold flex items-center mx-6  bg-#373730 shadow-lg p-3 rounded-lg mb-3 hover:scale-105">
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
