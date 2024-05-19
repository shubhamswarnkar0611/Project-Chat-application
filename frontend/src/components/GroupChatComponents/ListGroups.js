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
    <div className=" xl:w-[30vw] lg:w-[43vw] lg:h-[90vh] lg:ml-5 text-stone-600 flex lg:flex-col justify-start items-center overflow-auto ">
      <div className=" hidden lg:h-[10vh] h-[10vh] lg:flex justify-start items-center px-5 lg:w-[20vw] xl:w-[16vw] bg-#1D201D rounded-2xl shadow-xl">
        <p className=" font-semibold  text-xl text-white">{title}</p>
      </div>
      <div className="lg:min-h-[78vh] lg:w-[20vw] xl:w-[16vw]  h-[10vh] lg:block flex justify-center items-center bg-white shadow-md  rounded-2xl  lg:mt-3  lg:overflow-hidden mx-2   ">
        <ul className="flex  lg:block rounded-2xl   ">
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
