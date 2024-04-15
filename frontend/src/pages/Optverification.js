import React from "react";
import { RiSendPlane2Line } from "react-icons/ri";

const Optverification = () => {
  return (
    <div className="text-neutral-800 h-[90vh] w-[40vw]  rounded-xl  flex justify-center items-center  relative px-8 py-10   ">
      <form>
        <div className="w-[23vw]  p-6 rounded-lg ">
          <h1 className="text-3xl text-center font-bold mb-8"> Verification Code</h1>

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
  );
};

export default Optverification;
