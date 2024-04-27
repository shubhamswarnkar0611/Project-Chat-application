import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdOutlineGroupAdd } from "react-icons/md";
import { PiChats, PiChatsFill, PiCodesandboxLogoFill } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="w-[10vw] h-[100vh] text-#fdfcf3 flex-col flex  items-center">
      <div className="text-3xl font-bold h-[25vh] my-10 flex-col flex  items-center w-[5vw]">
        <div className=" scale-110 ">
          <PiCodesandboxLogoFill />
        </div>
        <p className="text-sm">ChatEase™</p>
      </div>
      <div className="text-2xl scale-125 ">
        <div className="mb-8 hover:scale-110">
          <BiChat />
        </div>
        <div className="mb-8 hover:scale-110">
          <HiMiniUserGroup />
        </div>
        <div className="mb-8 hover:scale-110">
          <MdOutlineGroupAdd />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
