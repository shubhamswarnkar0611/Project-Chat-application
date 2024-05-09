import React, { useEffect, useState } from "react";
import apiService from "../services/Api";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../store/userSlice";
import { setMessages } from "../store/messageSlice";
import OtherUsers from "./OtherUsers.js";

const ListOtherUser = ({ title }) => {
  
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const [allUsers, setAllUsers] = useState([]);
  
  useEffect(() => {
    async function getAllUserDetails() {
      try {
        const AllUsers = await apiService.getAllUsers();
        setAllUsers(AllUsers.data);
      } catch (e) {
        alert("Error while fetching user details");
      }
    }
    getAllUserDetails();
  }, []);

 
 

  return (
    <div className=" w-[22vw] sha h-[90vh] ml-5 text-stone-600 ">
      <div className="h-[10vh] flex justify-start items-center px-5 bg-#1D201D rounded-2xl shadow-xl">
        <p className=" font-semibold  text-xl text-white">{title}</p>
      </div>
      <div className="min-h-[78vh] bg-white shadow-xl rounded-2xl  mt-3 ">
        <ul>
          {allUsers &&
            allUsers.map((user) => {
              {
                if (user.id != currentUserData.id) {

                  return (
                    <>
                     <OtherUsers user={user} />
                    </>
                  );
                }
              }
            })}
        </ul>
      </div>
    </div>
  );
};

export default ListOtherUser;
