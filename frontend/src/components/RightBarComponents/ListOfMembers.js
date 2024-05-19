import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import apiService from "../../services/Api";
import { GiBootKick } from "react-icons/gi";
import useFetchAllMembers from "../../hooks/useFetchAllMembers";
import { GrUserAdmin } from "react-icons/gr";
const ListOfMembers = ({
  member,
  openDropdownId,
  setOpenDropdownId,
  toggleDropdown,
  toast
}) => {
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const { currentUserIsAdmin } = useSelector((state) => state.group);
  const fetchAllMembers = useFetchAllMembers();

  async function makeAdminHandler(member) {
    console.log("Admin", member);
    try {
      const makeAdmin = await apiService.MakeAdmin(
        member.GroupId,
        member.User.id
      );
      fetchAllMembers(member.GroupId);
      toast.success(`${member.User.firstName} is now an admin`);



    } catch (error) {
      toast.error(error.message);
    }
  }

  async function kickUserHandler(member) {
    console.log("Kick", member);
    try {
      const kickUser = await apiService.kickUser(
        member.GroupId,
        member.User.id
      );
      console.log(kickUser);
      fetchAllMembers(member.GroupId);
      toast.success(`${member.User.firstName} is Kicked from Group`);
    } catch (error) {
      toast.error(error.message);
    }
  }

  if (currentUserIsAdmin) {
    return (
      <div
        className={` font-semibold flex items-center mx-6 shadow-lg hover:bg-#2A344A text-white mb-2 p-2 rounded-3xl  ${
          member.isAdmin ? "bg-lime-600" : "bg-#373730"
        } `}
      >
        <img
          src={member?.User?.picture}
          class={`rounded-full  w-[35px] h-[35px] mr-2  object-cover `}
        />
        {member.User.id === currentUserData.id ? (
          <div className="flex justify-between w-full items-center">
            <p>You</p>
            <div className="flex mr-2">
              {member.isAdmin ? (
                <p className="text-xs mr-2">Admin</p>
              ) : (
                <button
                  className="relative"
                  onClick={() => toggleDropdown(member.UserId)}
                >
                  <BsThreeDotsVertical className="hover:scale-125" />
                </button>
              )}
            </div>
            {openDropdownId === member.UserId && (
              <div
                onClick={() => {
                  setOpenDropdownId(null);
                }}
                className="absolute  text-black right-7 mt-28 w-[150px] h-[200px] bg-#fdfcf3 rounded-2xl shadow-lg"
              >
                <ul>
                  {/* Dropdown items */}
                  <li className="py-2 px-4 text-sm hover:bg-#CACECA cursor-pointer rounded-xl">
                    <button
                      type="button"
                      onClick={() => makeAdminHandler(member)}
                    >
                      Make Group Admin
                    </button>
                  </li>
                  <li className="py-2 px-4 text-sm hover:bg-#CACECA cursor-pointer rounded-xl">
                    <button
                      type="button"
                      onClick={() => kickUserHandler(member)}
                    >
                      Remove
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex justify-between w-full items-center">
              <p>{`${member?.User.firstName} ${member?.User.lastName}`}</p>
              <div className="flex mr-2">
                {member.isAdmin ? (
                  <p className="text-xs mr-2">Admin</p>
                ) : (
                  <button
                    className="relative"
                    onClick={() => toggleDropdown(member.UserId)}
                  >
                    <BsThreeDotsVertical className=" hover:scale-150" />
                  </button>
                )}
              </div>
            </div>
            {openDropdownId === member.UserId && (
              <div
                onClick={() => {
                  setOpenDropdownId(null);
                }}
                className="absolute  text-black right-7 mt-28 w-[220px] h-[120px] bg-#fdfcf3 rounded-md shadow-lg"
              >
                <ul>
                  {/* Dropdown items */}
                  <p className="text-gray-600 font-semibold ml-2 my-2   ">
                    Admin Power
                  </p>
                  <hr className="border-t border-neutral-300  "></hr>
                  <button
                    type="button"
                    onClick={() => makeAdminHandler(member)}
                    className=" text-sm hover:bg-#3C3B34  hover:text-white cursor-pointer  flex justify-start   py-2.5 rounded-sm w-[220px]"
                  >
                    <li className="flex justify-center items-center">
                    <GrUserAdmin className="text-lime-500 text-lg ml-2" />
                      <p className="ml-2 ">Make Group Admin</p>
                    </li>
                  </button>
                  <button
                    type="button"
                    onClick={() => kickUserHandler(member)}
                    className="py-2.5 text-sm flex justify-start hover:bg-#3C3B34 hover:text-white cursor-pointer rounded-sm w-[220px]"
                  >
                    <li className="flex justify-center items-center">
                      <GiBootKick className="text-red-500 text-xl ml-2" />
                      <p className="ml-2 ">Kick</p>
                    </li>
                  </button>
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    );
  } else {
    return (
      <div
        className={` font-semibold flex items-center mx-6 shadow-lg bg-#373730 text-white mb-2 p-2 rounded-3xl  ${
          member.isAdmin ? "bg-lime-600" : "bg-#373730"
        } `}
      >
        <img
          src={member?.User?.picture}
          class={`rounded-full  w-[35px] h-[35px] mr-2  object-cover `}
        />
        {member.User.id === currentUserData.id ? (
          <div className="flex justify-between w-full items-center">
            <p>You</p>
            <div className="flex mr-2">
              {member.isAdmin ? <p className="text-xs mr-2">Admin</p> : null}
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between w-full items-center">
              <p>{`${member?.User.firstName} ${member?.User.lastName}`}</p>
              <div className="flex mr-2">
                {member.isAdmin ? <p className="text-xs mr-2">Admin</p> : null}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
};

export default ListOfMembers;
