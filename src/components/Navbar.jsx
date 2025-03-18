import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full sticky top-0 backdrop-blur-lg bg-white/30 z-10 border-b border-gray-300">
        <div className="sm:w-[970px] max-w-[90%] mx-auto flex items-center justify-between py-2">
          <ul className="flex items-center justify-between w-full">
            <a href="#nav">
              <li className="font-bold text-black py-2 text-xl cursor-pointer">
                home
              </li>
            </a>
            <a href="#aboutme">
              <li className="font-bold text-black py-2 text-xl cursor-pointer">
                About me
              </li>
            </a>
            <a href="#skills">
              <li className="font-bold text-black py-2 text-xl cursor-pointer">
                Skills
              </li>
            </a>
            <a href="#projecs">
              <li className="font-bold text-black py-2 text-xl cursor-pointer">
                Projects
              </li>
            </a>
            <a href="#cantact">
              <li className="font-bold text-black py-2 text-xl cursor-pointer">
                Contact
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
