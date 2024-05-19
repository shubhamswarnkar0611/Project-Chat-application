import React from "react";
import apiService from "../../services/Api";
import useFetchAllMembers from "../../hooks/useFetchAllMembers";
import { FaCheckCircle } from "react-icons/fa";


const ListOfRemainingUser = ({ user, selectedGroupDetails,toast }) => {
  const fetchAllMembers = useFetchAllMembers();
  async function addUserToGRoup(user, selectedGroupDetails) {
    try {
      const response = await apiService.addUserToGroup(
        selectedGroupDetails.id,
        user.id
      );
      console.log(response);
      if (response) {
        fetchAllMembers(selectedGroupDetails.id);
        toast.success(`${user.firstName} added to ${selectedGroupDetails.name} group `);
      }
    } catch (e) {
      toast.error(e.message);
    }
  }
  return (
    <button
      onClick={() => addUserToGRoup(user, selectedGroupDetails)}
      type="button"
      className=" text-sm hover:bg-#1D201D text-white cursor-pointer rounded-md flex justify-start hover:text-green-500  py-2.5 w-[171px]"
    >
      
      <li className="flex justify-center items-center ">
        <p className="ml-3 font-sans text-white  font-semibold">{`${user.firstName} ${user.lastName}`}</p>
        <FaCheckCircle className="   ml-2" />
      </li>
    </button>
  );
};

export default ListOfRemainingUser;
