import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiService from "../services/Api";
import { getCurrentUser, setOnlineUser } from "../store/userSlice";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import MainContent from "../components/MainContent";
import { setSocket } from "../store/socketSlice";
import { io } from "socket.io-client";

const HomeLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const SOCKET_URL = "http://localhost:4000";
  const {socket} = useSelector((store) => store.socket);

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


          return ()=>{
            socket.disconnect();
          }
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
    <div className="bg-#1D201D h-[100vh] flex ">
      <Sidebar />
      <MainContent />
      <Rightbar />
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default HomeLayout;
