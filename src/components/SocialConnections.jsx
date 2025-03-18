import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { LuLink2 } from "react-icons/lu";

const SocialConnections = () => {
  return (
    <div className="w-full">
      <div className="sm:w-[770px] max-w-[90%] mx-auto my-10 py-6 px-4 ">
        <div>
          <h1 className="text-xl font-bold text-center">social connections</h1>
        </div>
        <div className="flex gap-4 text-center my-5">
          <div className="w-[100%] text-6xl bg-black text-white rounded hover:bg-white hover:border hover:text-black cursor-pointer flex items-center justify-center h-30">
            <a href="https://t.me/Nabijonov009" target="_blank"><FaTelegramPlane /></a>
          </div>
          <div className="w-[100%] text-6xl bg-black text-white rounded hover:bg-white hover:border hover:text-black cursor-pointer flex items-center justify-center h-30">
            <a href="https://www.instagram.com/nabijonov_5355/" target="_blank"><FaInstagram /></a>
          </div>
          <div className="w-[100%] text-6xl bg-black text-white rounded hover:bg-white hover:border hover:text-black cursor-pointer flex items-center justify-center h-30">
           <a href="https://github.com/Alisher009Nabijonov/" target="_blank"> <IoLogoGithub /></a>
          </div>
          <div className="w-[100%] text-6xl bg-black text-white rounded hover:bg-white hover:border hover:text-black cursor-pointer flex items-center justify-center h-30">
            <a href="" target="_blank"><LuLink2 /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialConnections;
