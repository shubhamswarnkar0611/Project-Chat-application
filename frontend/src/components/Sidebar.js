import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiChat } from "react-icons/bi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdLogout, MdOutlineGroupAdd } from "react-icons/md";
import { PiCodesandboxLogoFill } from "react-icons/pi";

const Sidebar = () => {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="w-[10vw] h-[100vh] text-#fdfcf3 flex-col flex  items-center">
      <div className="text-3xl font-bold h-[25vh] my-10 flex-col flex  items-center w-[5vw] ">
        <div className=" scale-110  ">
          <PiCodesandboxLogoFill />
        </div>
        <p className="text-sm">ChatEase™</p>
      </div>
      <div className="text-2xl scale-125 ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? " flex justify-center mb-1  bg-#fdfcf3 text-#1D201D px-[45px] py-[20px] rounded-l-xl"
              : " flex justify-center mb-1 px-[42px] py-[20px] rounded-l-xl  hover:bg-#fdfcf3 hover:text-#1D201D"
          }
        >
          <BiChat />
        </NavLink>

        <NavLink
          to={"/group"}
          className={({ isActive }) =>
            isActive
              ? "mb-1  flex justify-center  bg-#fdfcf3 text-#1D201D px-[45px] py-[20px] rounded-l-xl"
              : " flex justify-center mb-1   px-[42px] py-[20px] rounded-l-xl  hover:bg-#fdfcf3 hover:text-#1D201D"
          }
        >
          <HiMiniUserGroup  />
        </NavLink>
        <NavLink
          to={"/makegroup"}
          className={({ isActive }) =>
            isActive
              ? "mb-1 flex justify-center  bg-#fdfcf3 text-#1D201D px-[45px] py-[20px] rounded-l-xl"
              : " flex justify-center mb-1  px-[42px] py-[20px] rounded-l-xl  hover:bg-#fdfcf3 hover:text-#1D201D"
          }
        >
          <MdOutlineGroupAdd />
        </NavLink>
        <button
          className="mb-1  hover:bg-red-500 hover:text-#fdfcf3 px-[45px] py-[20px]  rounded-l-xl"
          onClick={handleLogout}
        >
          <MdLogout />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
