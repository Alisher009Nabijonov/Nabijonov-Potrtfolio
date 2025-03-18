import React from "react";
import { skills } from "../Malumotlar";


const Skils = () => {
  return (
    <div id="skills" className="w-full">
      <div className="sm:w-[970px] max-w-[90%] mx-auto">
        <h1 className="text-center text-black text-2xl font-bold mb-3">Skills</h1>
        <h2 className="text-center ">I work in programs like</h2>
      <div id="skils" className="grid grid-cols-4 mx-auto px-4 py-4 gap-8">
        {skills.map((item) => (
          <div key={item.id} className="w-30 text-center my-4">
            <img src={item.img} alt={item.title} className="w-full h-full"/>
            <h1 className="text-[19px] font-bold">{item.title}</h1>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
};

export default Skils;
