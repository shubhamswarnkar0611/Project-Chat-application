import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdGroup } from "react-icons/md";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import apiService from "../services/Api";
import { useSelector, useDispatch } from "react-redux";
import {
  setGroupMembers,
  setSelectedUserToCreateGroup,
} from "../store/groupSlice";
import { ImCross } from "react-icons/im";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const MakeGroup = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const { selectedUserIdToCreateGroupData } = useSelector(
    (store) => store.group
  );

  useEffect(() => {
    async function fetchAllUser() {
      const result = await apiService.getAllUsers();
      setUsers(result.data);
      dispatch(setGroupMembers(null));
    }
    fetchAllUser();
  }, []);

  function handleAddUserToGroup(selectedUser) {
    if (selectedUser.id === currentUserData.id) {
      dispatch(
        setSelectedUserToCreateGroup([
          ...selectedUserIdToCreateGroupData,
          { ...selectedUser, isAdmin: true },
        ])
      );
    } else {
      dispatch(
        setSelectedUserToCreateGroup([
          ...selectedUserIdToCreateGroupData,
          { ...selectedUser, isAdmin: false },
        ])
      );
    }
  }

  function deleteSelectedUser(selectedUser) {
    let newArr = selectedUserIdToCreateGroupData.filter(
      (user) => user !== selectedUser
    );
    dispatch(setSelectedUserToCreateGroup(newArr));
  }

  async function createGroupHandler(e) {
    e.preventDefault();
    let name = e.target.groupName.value;
    setIsLoading(true);
    try {
      const group = await axios.post("http://localhost:4000/createGroup", {
        name,
        users: selectedUserIdToCreateGroupData,
      });
      if (group) {
        toast.success("Group Created Successfully");
      }

      // navigate("/group")
    } catch (err) {
      toast.error("Error creating the Group");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="w-[80vw] flex justify-center items-center  h-[100vh] ">
      <Toaster />
      <div className=" bg-#1D201D w-[72vw] lg:h-[96vh] rounded-3xl ">
        <div className="flex lg:ml-44 items-center h-[10vh] lg:h-[30vh] lg:w-[59vh]">
          <PiCodesandboxLogoFill className="text-#fdfcf3 text-2xl mx-2" />
          <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-white font-bol font-bold">
            Create connections, forge bonds, and build communities.
          </p>
        </div>
        <div className="text-neutral-800  lg:h-[30vh] w-[70vw]  rounded-xl  flex justify-center items-start  relative    ">
          <form onSubmit={(e) => createGroupHandler(e)}>
            <div className="lg:w-[50vw] w-[90vw] min-h-[68vh] lg:min-h-[50vh]  p-6 rounded-3xl  bg-#fdfcf3 flex flex-col items-center lg:block ">
              <p className="text-4xl font-bold text-#1D201D my-10">
                Create a Group
              </p>
              <div className="flex lg:flex-row flex-col ">
                <div className="relative size-full my-7 mx-4">
                  <input
                    className="size-full bg-transparent border-2  border-white  rounded-3xl  placeholder:text-neutral-500  py-2 pr-11 pl-5 shadow-sm hover:shadow-md "
                    type="text"
                    id="groupName"
                    placeholder="Enter Unique Group Name"
                    required
                  />
                  <MdGroup className="absolute right-5 bottom-1/4" />
                </div>
                <div className="relative size-full  my-7 mx-4">
                  <select
                    className="size-full bg-transparent border-2  border-white  rounded-3xl  placeholder:text-neutral-500  py-2  pr-11 pl-5 shadow-sm hover:shadow-md h-[5vh] "
                    onChange={(e) =>
                      handleAddUserToGroup(JSON.parse(e.target.value))
                    }
                  >
                    <option value="">Select User</option>
                    {users &&
                      users.map((user) => (
                        <option
                          key={user.id}
                          value={JSON.stringify(user)}
                        >{`${user.firstName}  ${user.lastName}`}</option>
                      ))}
                  </select>
                  <div className="flex mx-2 flex-wrap ">
                    {selectedUserIdToCreateGroupData.map((user) => (
                      <div className="flex border-[1.5px]  rounded-3xl px-2 py-1 mx-2 mt-2 bg-#1D201D text-#fdfcf3 justify-center items-center h-[4vh] ">
                        <p className="mr-2 ml-2">{`${user.firstName} ${user.lastName}`}</p>
                        <button
                          className="mr-2 text-xs  "
                          onClick={(e) => deleteSelectedUser(user)}
                        >
                          <ImCross className=" hover:text-red-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="py-2 px-5  hover:bg-white hover:text-neutral-700  font-bold rounded-full shadow-md bg-#595f39 text-neutral-100 hover:shadow-md hover:shadow-#E4E4DE focus:outline-none focus:ring focus:ring-violet-200 focus:ring-opacity-75 w-[20vw] my-8 mx-52"
                type="submit"
              >
                {!isLoading ? <p>Create</p> : <p>Creating..</p>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeGroup;
