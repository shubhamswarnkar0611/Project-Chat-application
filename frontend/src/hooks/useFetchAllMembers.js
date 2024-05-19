// hooks/useFetchAllMembers.js
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import apiService from "../services/Api";
import { setGroupMembers } from "../store/groupSlice";

const useFetchAllMembers = () => {
  const dispatch = useDispatch();

  const fetchAllMembers = useCallback(
    async (groupId) => {
      try {
        const members = await apiService.getAllMember(groupId);
        console.log(members.data, "members");
        if (members) {
          dispatch(setGroupMembers(members.data));
        }
      } catch (err) {
        console.error("Error fetching members:", err.message);
      }
    },
    []
  );

  return fetchAllMembers;
};

export default useFetchAllMembers;
