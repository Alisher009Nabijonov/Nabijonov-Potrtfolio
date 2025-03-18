import React from "react";
// import { IoLogoGithub } from "react-icons/io5";
import FonImg from "../assets/myimg.jpg";
import { FiGithub } from "react-icons/fi";


const MyPortfolio = () => {
  return (
    <div  className="sm:w-[970px] max-w-[90%] mx-auto my-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-black font-black my-1">
            Nabijonov Alisher
          </h1>
          <h2 className="text-gray-600">Frontend developer, 16 year old.</h2>
        </div>
        <div>
          <a href="https://github.com/Alisher009Nabijonov" target="_blank">
            <button className="flex items-center gap-2 py-2 px-6 bg-black text-white rounded cursor-pointer hover:bg-white hover:text-black hover:border">
            Open my gitHub <FiGithub/> 
            </button>
          </a>
        </div>
      </div>
      <div id="fon" className="w-full py-6 my-4 px-6 text-white rounded flex items-center justify-between">
        <div className="w-[60%]">
          <h1 className="py-2 font-bold text-4xl w-[80%] mb-1">Dream big, because they will take you one step further.</h1>
          <h2>-Nabijonov Alisher</h2>
        </div>
        <div className="w-[40%] ">
          <img src={FonImg} alt="myimg" className="w-60 h-60 rounded-full  mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
