import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import apiService from "../services/Api";
import userSlice, { getCurrentUser } from "../store/userSlice";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import MainContent from "../components/MainContent";

const HomeLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchUser() {
      try {
        const token = localStorage.getItem("token");
        const userDetails = await apiService.getUserData(token);
        dispatch(getCurrentUser(userDetails.data));
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
