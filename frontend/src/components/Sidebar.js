import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiChat } from "react-icons/bi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdLogout, MdOutlineGroupAdd } from "react-icons/md";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { setMessages } from "../store/messageSlice";
import { setGroupMembers } from "../store/groupSlice";
const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch =useDispatch();
  function handleLogout() {
    localStorage.removeItem("token");
    dispatch(setMessages(null))
    navigate("/login");
  }
  function handleResetMessage() {
    dispatch(setMessages(null))
    dispatch(setGroupMembers(null))
  }

  return (
    <div className="lg:w-[10vw] h-[20vh] w-[100vw] lg:h-[100vh] text-#fdfcf3 flex-col flex  items-center">
      <div className="text-3xl font-bold h-[7vh] lg:h-[25vh] lg:my-10 lg:flex-col flex  lg:items-center lg:w-[5vw] mt-4 ">
        <div className=" scale-110 mx-1 ">
          <PiCodesandboxLogoFill />
        </div>
        <p className="text-sm">ChatEase™</p>
      </div>
      <div className="text-2xl scale-125 flex lg:block ">
        <NavLink
          onClick={handleResetMessage()}
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "lg:flex-row flex flex-col justify-center items-center mb-1 bg-#fdfcf3 text-#1D201D h-[8vh] w-[13vw] lg:w-[6vw]   rounded-xl lg:rounded-l-xl mx-1"
              : "lg:flex-row flex flex-col justify-center items-center mb-1 h-[8vh] w-[13vw] lg:w-[6vw]  rounded-xl lg:rounded-l-xl  hover:bg-#fdfcf3 hover:text-#1D201D mx-1"
          }
        >
          <BiChat />
          <p className="lg:hidden text-xs font-bold mx-2 ">Chat</p>
        </NavLink>

        <NavLink
          to={"/group"}
          onClick={handleResetMessage()}
          className={({ isActive }) =>
            isActive
              ? "lg:flex-row flex flex-col justify-center items-center mb-1 bg-#fdfcf3 text-#1D201D h-[8vh] w-[13vw] lg:w-[6vw]   rounded-xl lg:rounded-l-xl mx-1"
              : "lg:flex-row flex  flex-col justify-center items-center mb-1 h-[8vh] w-[13vw] lg:w-[6vw]  rounded-xl lg:rounded-l-xl  hover:bg-#fdfcf3 hover:text-#1D201D mx-1"
          }
        >
          <HiMiniUserGroup />
          <p className="lg:hidden text-xs font-bold ">Group</p>
        </NavLink>
        <NavLink
          to={"/makegroup"}
          onClick={handleResetMessage()}
          className={({ isActive }) =>
            isActive
              ? "lg:flex-row flex flex-col justify-center items-center mb-1 bg-#fdfcf3 text-#1D201D h-[8vh] w-[13vw] lg:w-[6vw]  rounded-xl lg:rounded-l-xl mx-1"
              : "lg:flex-row flex flex-col justify-center items-center mb-1 h-[8vh] w-[13vw] lg:w-[6vw]   rounded-xl lg:rounded-l-xl  hover:bg-#fdfcf3 hover:text-#1D201D mx-1"
          }
        >
          <MdOutlineGroupAdd />
          <p className="lg:hidden text-xs font-bold  ">Add</p>
        </NavLink>
        <button
          className="lg:flex-row flex flex-col justify-center items-center mb-1 h-[8vh] w-[13vw] lg:w-[6vw]   rounded-xl lg:rounded-l-xl  hover:bg-red-500 hover:text-#1D201D mx-1"
          onClick={handleLogout}
        >
          <MdLogout />
          <p className="lg:hidden text-xs font-bold  ">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
