import React, { useState } from "react";
import { FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../services/Api";

const Login = () => {
    const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    const { id, value } = e.target;
    setLoginDetails({ ...loginDetails, [id]: value });
  }

 async function handleLogin(e){
    e.preventDefault();
    try{
        const result=await apiService.login(loginDetails)
        console.log(result.data);
        localStorage.setItem("token", result.data);
        navigate("/")
    }catch(e){
        console.log(e.response.data);
    }

 }

  return (
    <div className="flex justify-evenly items-center h-[100vh]  ">
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
      <div className="text-neutral-800 h-[90vh] w-[40vw]  rounded-xl  flex justify-center items-center  relative px-8 py-10   ">
        <form onSubmit={handleLogin}>
          <div className="w-[27vw]  p-6 rounded-lg ">
            <h1 className="text-4xl text-center font-bold my-8">Login</h1>

            <div className="relative size-full  my-7">
              <input
                className="size-full bg-transparent border-2  border-white  rounded-3xl  placeholder:text-neutral-500  py-2 pr-11 pl-5 shadow-sm hover:shadow-md "
                type="email"
                id="email"
                placeholder="Enter Email"
                required
                onChange={(e) => handleInputChange(e)}
              />
              <MdEmail className="absolute right-5 bottom-1/4" />
            </div>

            <div className="relative size-full my-2">
              <input
                className="size-full bg-transparent border-2  border-white  rounded-3xl  placeholder:text-neutral-500  py-2 pr-11 pl-5 shadow-sm hover:shadow-md  "
                type="password"
                id="password"
                placeholder="Password"
                required
                onChange={(e) => handleInputChange(e)}
              />
              <FaLock className="absolute right-5 bottom-1/4" />
            </div>

            <button
              className="py-2 px-5 hover:bg-white hover:text-neutral-700  font-bold rounded-full shadow-md bg-#595f39 text-neutral-100 hover:shadow-md hover:shadow-#E4E4DE focus:outline-none focus:ring focus:ring-violet-200 focus:ring-opacity-75 w-full my-8"
              type="submit"
            >
              <p>Login</p>
            </button>
            <div className="text-center text-sm ">
              <p>
                Don't have an account?{" "}
                <Link className="hover:underline" to="/signup">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
