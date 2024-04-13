import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";

const SignUp = () => {
  const[userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleInputChange(e){
    e.preventDefault();
    const{id,value} = e.target;
    setUserInfo({...userInfo ,[id]:value});
  }

  console.log(userInfo)
  return (
    <div className="text-neutral-800 h-[90vh] w-[40vw]  rounded-xl  flex justify-center items-end  relative px-8 py-10   ">
      <form>
        <div className="w-[27vw]  p-6 rounded-lg ">
          <h1 className="text-4xl text-center font-bold my-8">Sign-Up</h1>
          <div className="flex justify-between ">
            <div className="relative size-full w-[20vw]  my-8">
              <input
                className="size-full bg-transparent border-2  border-white  rounded-3xl  placeholder:text-neutral-500 py-2 pr-11 pl-5"
                type="text"
                placeholder="First Name"
                id="firstName"
                required
                onChange={e=>handleInputChange(e)}
              />
              <FaUser className="absolute right-5 bottom-1/4" />
            </div>
            <div className="relative size-full w-[20vw] ml-3  my-8">
              <input
                className="size-full bg-transparent border-2  border-white  rounded-3xl  placeholder:text-neutral-500 py-2 pr-11 pl-5"
                type="text"
                placeholder="Last Name"
                id="lastName"
                required
                onChange={e=>handleInputChange(e)}
              />
              <FaUser className="absolute right-5 bottom-1/4" />
            </div>
          </div>
          <div className="relative size-full  my-2">
            <input
              className="size-full bg-transparent border-2  border-white  rounded-3xl  placeholder:text-neutral-500  py-2 pr-11 pl-5"
              type="email"
              id="email"
              placeholder="Enter Email"
              required
              onChange={e=>handleInputChange(e)}
            />
            <MdEmail className="absolute right-5 bottom-1/4" />
          </div>

          <div className="relative size-full my-8">
            <input
              className="size-full bg-transparent border-2 bor border-white  rounded-3xl  placeholder:text-neutral-500  py-2 pr-11 pl-5 "
              type="password"
              id="password"
              placeholder="Password"
              required
              onChange={e=>handleInputChange(e)}
            />
            <FaLock className="absolute right-5 bottom-1/4" />
          </div>
          <div className="relative size-full my-8">
            <input
              className="size-full bg-transparent border-2  border-white  rounded-3xl  placeholder:text-neutral-500 py-2 pr-11 pl-5 "
              type="password"
              id="confpassword"
              placeholder="Confirm Password"
              required
              onChange={e=>handleInputChange(e)}
            />
            <FaLock className="absolute right-5 bottom-1/4" />
          </div>
          <div className="flex justify-between">
            <label className="text-neutral-700 text-sm hover:underline">
              <input className="m-4" type="checkbox" />I agree with the Terms
              And Condition
            </label>
          </div>
          <button
            className="py-2 px-5 bg-white text-neutral-700  font-bold rounded-full shadow-md hover:bg-#595f39 hover:text-neutral-100 hover:shadow-md hover:shadow-#595f39 focus:outline-none focus:ring focus:ring-violet-200 focus:ring-opacity-75 w-full my-8"
            type="submit"
          >
            <p>Sign Up</p>
          </button>
          <div className="text-center text-sm ">
            <p>
              Already have an account?{" "}
              <a className="text-neutral-700 hover:underline" to="/login">
                Login
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
