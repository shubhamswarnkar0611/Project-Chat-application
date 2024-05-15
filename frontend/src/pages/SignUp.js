import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { MdAddCircle, MdEmail, MdPhone } from "react-icons/md";
import apiService from "../services/Api";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    picture: "",
    email: "",
    phone: null,
    password: "",
  });
  // for image purposes
  const [image, setImage] = useState(null);
  const [upladingImg, setUploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Max file size is 1mb");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  async function uploadImage() {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "myCloud");
    try {
      setUploadingImg(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dmwofcajz/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setUploadingImg(false);
      return urlData.url;
    } catch (error) {
      setUploadingImg(false);
      console.log(error);
    }
  }

  function handleInputChange(e) {
    e.preventDefault();
    const { id, value } = e.target;
    setUserInfo({ ...userInfo, [id]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!image) return alert("Please upload your profile picture");
      const url = await uploadImage(image);
      setUserInfo({ ...userInfo, picture: url });
      console.log(userInfo);
      const result = await apiService.signup(userInfo);
      localStorage.setItem("token", result.data);
      navigate("/");
    } catch (e) {
      console.log(e.response);
    }
  }

  console.log(userInfo);
  return (
    <div className="flex justify-evenly items-center h-[100vh] ">
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
      <div className="text-neutral-800 h-[90vh] w-[40vw]  rounded-xl  flex justify-center items-end  relative px-8 py-10   ">
        <form onSubmit={handleSubmit}>
          <div className="w-[27vw]  p-6 rounded-lg ">
            <h1 className="text-4xl text-center font-bold my-8">Sign-Up</h1>
            <div className="flex justify-center">
              <label htmlFor="image-upload" className="relative">
                <div className="relative w-[5vw] h-[10vh]  border-4 border-#1D201D rounded-full overflow-hidden">
                  <img
                    alt=""
                    src={imagePreview}
                    className="w-full h-full object-cover"
                  />
                  {imagePreview ? null : (
                    <div className="absolute bottom-3 right-1 flex justify-center items-center">
                      <MdAddCircle className="text-xl text-lime-500" />
                    </div>
                  )}
                </div>
              </label>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/png, image/jpeg"
                onChange={validateImg}
              />
            </div>
            <div className="flex justify-between my-6 ">
              <div className="relative size-full w-[20vw]  ">
                <input
                  className="size-full bg-transparent border-2  border-white  rounded-3xl  placeholder:text-neutral-500 py-2 pr-11 pl-5 shadow-sm hover:shadow-md "
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  required
                  onChange={(e) => handleInputChange(e)}
                />
                <FaUser className="absolute right-5 bottom-1/4" />
              </div>
              <div className="relative size-full w-[20vw] ml-3  ">
                <input
                  className="size-full bg-transparent border-2  border-white  rounded-3xl  placeholder:text-neutral-500 py-2 pr-11 pl-5 shadow-sm hover:shadow-md "
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  required
                  onChange={(e) => handleInputChange(e)}
                />
                <FaUser className="absolute right-5 bottom-1/4" />
              </div>
            </div>
            <div className="relative size-full  my-6">
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
            <div className="relative size-full  my-6">
              <input
                className="size-full bg-transparent border-2  border-white  rounded-3xl  placeholder:text-neutral-500  py-2 pr-11 pl-5 shadow-sm hover:shadow-md "
                type="number"
                id="phone"
                placeholder="Enter Phone No."
                required
                onChange={(e) => handleInputChange(e)}
              />
              <MdPhone className="absolute right-5 bottom-1/4" />
            </div>

            <div className="relative size-full my-8">
              <input
                className="size-full bg-transparent border-2 bor border-white  rounded-3xl  placeholder:text-neutral-500  py-2 pr-11 pl-5 shadow-sm hover:shadow-md "
                type="password"
                id="password"
                placeholder="Password"
                required
                onChange={(e) => handleInputChange(e)}
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
                <Link className="text-neutral-700 hover:underline" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
