import React from "react";

const ListMainComponent = () => {
  return (
    <div className=" w-[22vw] sha h-[90vh] ml-5 text-stone-600 ">
      <div className="h-[10vh] flex justify-start items-center px-5 bg-#1D201D rounded-2xl shadow-xl">
        <p className=" font-semibold  text-xl text-white">Group Chat</p>
      </div>
      <div className="min-h-[78vh] bg-white shadow-xl rounded-2xl py-2 mt-3 ">
        <ul>
          <li class="flex justify-between items-center  mt-2 py-3 px-2 hover:shadow-2xl rounded cursor-pointer transition">
            <div class="flex ">
              <img
                src="https://i.imgur.com/aq39RMA.jpg"
                width="40"
                height="40"
                class="rounded-full"
              />
              <div class="flex flex-col ml-2">
                <span class="font-medium text-#3C3B34">Jessica Koel</span>
                <span class="text-sm text-gray-400 truncate w-32">
                  Hey, Joel, I here to help you out please tell me
                </span>
              </div>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-gray-400 text-sm">11:26</span>
              
            </div>
            
          </li>
          <hr></hr>
          
         
        </ul>
      </div>
    </div>
  );
};

export default ListMainComponent;
