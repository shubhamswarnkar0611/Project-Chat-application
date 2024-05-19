import React, { useCallback } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { BiChat } from "react-icons/bi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdLogout, MdOutlineGroupAdd } from "react-icons/md";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { setMessages } from "../store/messageSlice";
import { setGroupMembers } from "../store/groupSlice";
const Sidebar = ({ toggleRightBar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogout() {
    localStorage.removeItem("token");
    dispatch(setMessages(null));
    navigate("/login");
  }
  const handleResetMessage = useCallback(() => {
    dispatch(setMessages(null));
  }, []);

  return (
    <div className="lg:w-[40] h-[20vh] w-[100vw] lg:h-[100vh] text-#fdfcf3 flex-col flex  items-center">
      <div className="text-3xl font-bold h-[7vh] lg:h-[25vh] lg:my-10 lg:flex-col flex justify-between w-[95vw] lg:items-center lg:w-[5vw] mt-4 ">
        <div className=" scale-110 flex justify-center lg:flex-col lg:items-center ">
          <PiCodesandboxLogoFill />
          <p className="text-sm ml-2">ChatEase™</p>
        </div>
        <div className="lg:hidden text-2xl ">
          <button onClick={toggleRightBar} className="text-2xl">
            <FaBarsStaggered />
          </button>
        </div>
      </div>
      <div className="text-2xl scale-125 flex lg:block ">
        <NavLink
          onClick={handleResetMessage}
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
