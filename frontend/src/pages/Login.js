import React from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Login = () => {
  return (
    <div className="text-neutral-800 h-[90vh] w-[40vw]  rounded-xl  flex justify-center items-center  relative px-8 py-10   ">
      <form>
        <div className="w-[27vw]  p-6 rounded-lg ">
          <h1 className="text-4xl text-center font-bold my-8">Login</h1>

          <div className="relative size-full  my-7">
            <input
              className="size-full bg-transparent border-2  border-white  rounded-3xl  placeholder:text-neutral-500  py-2 pr-11 pl-5"
              type="email"
              id="email"
              placeholder="Enter Email"
              required
            />
            <MdEmail className="absolute right-5 bottom-1/4" />
          </div>

          <div className="relative size-full my-2">
            <input
              className="size-full bg-transparent border-2  border-white  rounded-3xl  placeholder:text-neutral-500  py-2 pr-11 pl-5 "
              type="password"
              id="password"
              placeholder="Password"
              required
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
              <a className="hover:underline" to="/signup">
                Register
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
