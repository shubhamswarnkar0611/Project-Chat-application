import React from "react";
import { PiCodesandboxLogoFill } from "react-icons/pi";

const Optverification = () => {
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
        <form>
          <div className="w-[23vw]  p-6 rounded-lg ">
            <h1 className="text-3xl text-center font-bold mb-8">
              {" "}
              Verification Code
            </h1>

            <div className="relative size-full  mt-8">
              <input
                className="size-full bg-transparent border-2  border-neutral-500  rounded-3xl  placeholder:text-neutral-500  py-2 pr-11 pl-5 shadow-sm hover:shadow-md "
                type="text"
                id="Otp"
                placeholder="e.g. 123456"
                required
              />
            </div>
            <button
              className="py-2 px-5 hover:bg-white hover:text-neutral-700  font-bold rounded-full shadow-md bg-#595f39 text-neutral-100 hover:shadow-md hover:shadow-#E4E4DE focus:outline-none focus:ring focus:ring-violet-200 focus:ring-opacity-75 w-full mt-4 "
              type="submit"
            >
              <p>Verify</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Optverification;
