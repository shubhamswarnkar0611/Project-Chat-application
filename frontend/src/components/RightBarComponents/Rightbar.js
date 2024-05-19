import React, { useEffect, useState } from "react";
import {
  MdAddBox,
  MdArrowRight,
  MdEmail,
  MdLogout,
  MdPhone,
} from "react-icons/md";
import { IoChevronForwardCircle } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../../store/userSlice";
import { setMessages } from "../../store/messageSlice";
import { useNavigate } from "react-router-dom";
import ListOfMembers from "./ListOfMembers";
import ListOfRemainingUser from "./ListOfRemainingUser";
import { setReaminingUser } from "../../store/groupSlice";
import toast, { Toaster } from "react-hot-toast";
import { FaCross } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Rightbar = ({ isOpenRightBar, toggleRightBar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [openAddNewUser, setOpenAddNewUser] = useState(null);

  const toggleAddNewUser = () => {
    setOpenAddNewUser(!openAddNewUser);
  };
  const toggleDropdown = (memberId) => {
    setOpenDropdownId(openDropdownId === memberId ? null : memberId);
  };

  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const { allUsers } = useSelector((store) => store.user);
  const { groupMember, selectedGroupDetails, remainingUsers } = useSelector(
    (state) => state.group
  );
  const { socket } = useSelector((store) => store.socket);
  useEffect(() => {
    fetchRemaining();
  }, [groupMember]);

  const fetchRemaining = () => {
    if (allUsers && groupMember) {
      const groupMemberIds = groupMember.map((user) => user.UserId);
      console.log(groupMember, "remaining");

      const remainingUsers = allUsers.filter(
        (user) => !groupMemberIds.includes(user.id)
      );
      dispatch(setReaminingUser(remainingUsers));
    }
  };

  function handleLogout() {
    socket.disconnect();
    localStorage.removeItem("token");
    dispatch(setSelectedUser(null));
    dispatch(setMessages(null));
    navigate("/login");
  }

  function handleDropDown() {
    if (openDropdownId) {
      setOpenDropdownId(null);
    }
    if (openAddNewUser) {
      setOpenAddNewUser(false);
    }
  }
  return groupMember ? (
    <div
      onClick={() => handleDropDown()}
      className="  h-[100vh] flex justify-center items-center  "
    >
      <Toaster />
      <div className="  bg-#1D201D lg:min-w-[17.5vw] max-w-[60vw] h-[96vh] rounded-3xl flex flex-col justify-start items-center ">
      <button onClick={toggleRightBar} className="lg:hidden">
          <IoChevronForwardCircle  className="fixed hover:text-lime-400 right-3 top-7 text-#fdfcf3 text-2xl" />
        </button>
        <div className="lg:h-[5vh] h-[70px] w-[90px] mt-10 flex justify-center items-center lg:w-[5vw] ">
          <img
            src="https://i.imgur.com/aq39RMA.jpg"
            className="rounded-full border-4 border-white shadow-xl  object-cover"
          />
        </div>
        <div className="mt-6 flex justify-center">
          <p className="text-xl text-#fdfcf3 font-bold ">
            {selectedGroupDetails.name}
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center  py-4 min-w-[40vh]">
          <div className="">
            <div className="flex justify-between items-center ml-5 mb-5 mr-3  ">
              <p className="font-semibold text-lg text-#fdfcf3 ">
                Group Members
              </p>
              <button
                onClick={toggleAddNewUser}
                className="realtive text-2xl text-#fdfcf3  cursor-pointer hover:text-blue-400 "
              >
                <MdAddBox />
              </button>
              {openAddNewUser && (
                <div className="absolute text-black right-7 mt-[13vh] w-[171px] min-h-[40px] bg-neutral-800 rounded-md shadow-lg ">
                  <ul>
                    <li>
                      <p className="text-gray-400 font-semibold ml-2 my-2 ">
                        Add User
                      </p>
                      <hr className="border-t border-neutral-700  "></hr>
                    </li>

                    {remainingUsers &&
                      remainingUsers.map((user) => (
                        <ListOfRemainingUser
                          user={user}
                          selectedGroupDetails={selectedGroupDetails}
                          toast={toast}
                        />
                      ))}
                  </ul>
                </div>
              )}
            </div>

            {groupMember &&
              groupMember.map((member) => {
                return (
                  <ListOfMembers
                    member={member}
                    openDropdownId={openDropdownId}
                    toggleDropdown={toggleDropdown}
                    setOpenDropdownId={setOpenDropdownId}
                    toast={toast}
                  />
                );
              })}
          </div>
          <button
            className="text-gray-800 font-semibold flex items-center mx-6 bg-red-500 shadow-lg p-3 rounded-lg hover:bg-red-400  mt-5 "
            onClick={handleLogout}
          >
            <MdLogout className="scale-125 mr-2" />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-[100vh] flex justify-center items-center ">
      <div className="  bg-#1D201D lg:min-w-[17.5vw] max-w-[58vw] h-[96vh] rounded-3xl flex flex-col justify-start items-center">
      <button onClick={toggleRightBar} className="lg:hidden">
          <IoChevronForwardCircle  className="fixed hover:text-lime-400 right-4 top-7 text-#fdfcf3 text-2xl" />
        </button>
        <div className="h-[10]vh mt-10 flex justify-center items-center  ">
          <img
            src={currentUserData.picture}
            className="rounded-full w-[90px] h-[90px]  border-4 border-white shadow-xl object-cover"
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
