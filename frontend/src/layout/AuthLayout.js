import React from "react";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Optverification from "../pages/Optverification";
import { PiCodesandboxLogoFill } from "react-icons/pi";

const AuthLayout = () => {
  return (
    <div className="flex justify-evenly items-center h-[100vh]">
      <div className="h-[95vh] w-[30vw] bg-neutral-900 rounded-xl flex justify-center items-center">
        <div className="">
          <span className="text-3xl text-white font-bold flex items-center ">
            <PiCodesandboxLogoFill />
            <p className="p-1"> ChatEase </p>
          </span>
          <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-white font-bol  ">
            No Hassle, Just Chat: Discover ChatEase™.
          </p>
        </div>
      </div>
      <Login />
    </div>
  );
};

export default AuthLayout;
