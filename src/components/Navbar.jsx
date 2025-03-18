import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Navbar = () => {
  const [bars, setBars] = useState("close");
  const toggleBars = () => {
    setBars("open");
  };
  const toggleBarsClose = () => {
    setBars("close");
  };
  return (
    <>
      <div className="w-full sticky top-0 backdrop-blur-lg bg-white/30 z-10 border-b border-gray-300">
        <div className="sm:w-[970px] max-w-[90%] mx-auto flex items-center justify-between py-2">
          <ul id="navbar" className="flex items-center justify-between w-full">
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
          <div className={`sidebar ${bars}`}>
            <div className="flex flex-col justify-between h-full px-6 py-6">
              <div>
                <div>
                  <h1 className="text-2xl font-bold w-[50%] mb-6">
                    Nabijonov Alisher
                  </h1>
                  <hr className="mb-6" />
                </div>
                <div>
                  <ul className=" items-center justify-between w-full">
                    <a href="#nav">
                      <li
                        onClick={toggleBarsClose}
                        className="text-black py-2 text-xl cursor-pointer"
                      >
                        home
                      </li>
                    </a>
                    <a href="#aboutme">
                      <li
                        onClick={toggleBarsClose}
                        className="text-black py-2 text-xl cursor-pointer"
                      >
                        About me
                      </li>
                    </a>
                    <a href="#skills">
                      <li
                        onClick={toggleBarsClose}
                        className="text-black py-2 text-xl cursor-pointer"
                      >
                        Skills
                      </li>
                    </a>
                    <a href="#projecs">
                      <li
                        onClick={toggleBarsClose}
                        className="text-black py-2 text-xl cursor-pointer"
                      >
                        Projects
                      </li>
                    </a>
                    <a href="#cantact">
                      <li
                        onClick={toggleBarsClose}
                        className="text-black py-2 text-xl cursor-pointer"
                      >
                        Contact
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
              <div>
                <a
                  href="https://github.com/Alisher009Nabijonov"
                  target="_blank"
                >
                  <button className="flex items-center gap-2 py-2 px-6 bg-black text-white rounded cursor-pointer hover:bg-white hover:text-black hover:border">
                    Open my gitHub <FiGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            id="responsive_nav"
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-2xl text-black font-black my-1">
                Nabijonov Alisher
              </h1>
              <h2 className="text-gray-600">
                Frontend developer, 16 year old.
              </h2>
            </div>
            <div>
              <div>
                {bars === "close" ? (
                  <h1 className="text-2xl cursor-pointer" onClick={toggleBars}>
                    <FaBars />
                  </h1>
                ) : (
                  <p
                    className="text-2xl cursor-pointer font-bold"
                    onClick={toggleBarsClose}
                  >
                    <i class="fa-solid fa-x"></i>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
