import React, { useEffect, useState } from "react";
import apiService from "../../services/Api.js";
import { useSelector, useDispatch } from "react-redux";
import OtherUsers from "./OtherUsers.js";
import { setUsers } from "../../store/userSlice.js";
import { setGroupMembers } from "../../store/groupSlice.js";

const ListOtherUser = ({ title }) => {
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const [allUsers, setAllUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getAllUserDetails() {
      try {
        const AllUsers = await apiService.getAllUsers();
        setAllUsers(AllUsers.data);
        dispatch(setUsers(AllUsers.data));
        dispatch(setGroupMembers(null));
      } catch (e) {
        alert("Error while fetching user details");
      }
    }
    getAllUserDetails();
  }, []);

  return (
    <div className=" xl:w-[30vw] lg:w-[43vw] lg:h-[90vh] lg:ml-5 text-stone-600 flex lg:flex-col justify-start items-center overflow-auto  ">
      <div className="hidden lg:h-[10vh] h-[10vh] lg:flex justify-start items-center px-5 lg:w-[20vw] xl:w-[16vw] bg-#1D201D rounded-2xl shadow-xl ">
        <p className=" font-semibold  text-xl text-white">{title}</p>
      </div>

      <ul className="flex lg:min-h-[76vh] lg:block rounded-2xl   lg:w-[20vw] xl:w-[16vw]  h-[10vh]  justify-center items-center lg:overflow-x-hidden shadow-md   lg:mt-3  bg-white mx-2     ">
        {allUsers &&
          allUsers.map((user) => {
            {
              if (user.id != currentUserData.id) {
                return (
                  <>
                    <OtherUsers user={user} key={user.id} />
                  </>
                );
              }
            }
          })}
      </ul>
    </div>
  );
};

export default ListOtherUser;
