import React, { useEffect, useState } from "react";
import apiService from "../../services/Api.js";
import { useSelector } from "react-redux";
import GroupItems from "./GroupItems.js";

const ListGroups = ({ title }) => {
  const currentUserData = useSelector((state) => state.user.currentUserDetails);
  const [allGroups, setAllGroups] = useState([]);

  useEffect(() => {
    async function fetchGroups() {
      try {
        const AllGroups = await apiService.getAllGroup({UserId:currentUserData.id});
        console.log(AllGroups);
        setAllGroups(AllGroups.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchGroups();
  }, []);

  return (
    <div className=" w-[22vw] sha h-[90vh] ml-5 text-stone-600 ">
      <div className="h-[10vh] flex justify-start items-center px-5 bg-#1D201D rounded-2xl shadow-xl">
        <p className=" font-semibold  text-xl text-white">{title}</p>
      </div>
      <div className="min-h-[78vh] bg-white shadow-xl rounded-2xl  mt-3 ">
        <ul>
          {allGroups &&
            allGroups.map((group) => {
              {
                return (
                  <>
                    <GroupItems group={group?.Group} key={group?.Group?.id}/>
                  </>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
};

export default ListGroups;
