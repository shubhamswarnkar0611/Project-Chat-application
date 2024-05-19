import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiService from "../services/Api";
import { getCurrentUser, setOnlineUser } from "../store/userSlice";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/RightBarComponents/Rightbar";
import { Outlet } from "react-router-dom";
import { setSocket } from "../store/socketSlice";
import { io } from "socket.io-client";

const HomeLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenRightBar, setIsOpenRightBar] = useState(true);
  const dispatch = useDispatch();
  const SOCKET_URL = "http://localhost:4000";
  const { socket } = useSelector((store) => store.socket);

  function toggleRightBar() {
    setIsOpenRightBar(!isOpenRightBar);
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const userDetails = await apiService.getUserData(token);
          dispatch(getCurrentUser(userDetails.data));
          const socket = io(SOCKET_URL, {
            query: {
              userId: userDetails.data.id,
            },
          });
          dispatch(setSocket(socket));

          socket.on("getOnlineUser", (onlineUser) => {
            dispatch(setOnlineUser(onlineUser));
          });

          return () => {
            socket.disconnect();
          };
        } else {
          if (socket) {
            socket.disconnect();
            dispatch(setSocket(null));
          }
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
  }, []);

  return !isLoading ? (
    <div className="bg-#1D201D h-[100vh] flex lg:flex-row flex-col items-center ">
      <Sidebar toggleRightBar={toggleRightBar} />
      <Outlet />
      <aside
        id="logo-sidebar"
        className={`fixed lg:static  h-screen  top-0 right-0   transition-transform ${
          isOpenRightBar && "translate-x-full lg:-translate-x-0 "
        }  sm:-translate-y-0 w-[100vw]  bg-opacity-65  lg:bg-transparent bg-white flex justify-end lg:justify-center items-center  `}
        aria-label="Sidebar"
      >
        <Rightbar
          toggleRightBar={toggleRightBar}
          isOpenRightBar={isOpenRightBar}
        />
      </aside>
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default HomeLayout;
