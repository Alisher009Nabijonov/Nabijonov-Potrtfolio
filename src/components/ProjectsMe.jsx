import React from "react";
import { Projects } from "../Malumotlar";
import { BiLogoNetlify } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
const ProjectsMe = () => {
  return (
    <div id="projecs" className="w-full bg-[#E5E7EB]">
      <div className="sm:w-[970px] max-w-[90%] mx-auto py-4 ">
        <div>
          <h1 className="text-black text-2xl font-bold my-3 text-center">
            Projects
          </h1>
          <h1 className="text-center mb-4">This is all my project</h1>
        </div>
        <div id="my_projects" className="grid grid-cols-2 gap-4">
          {Projects.map((item) => (
            <div id="my_projects_main" key={item.id} className="bg-white rounded-xl">
              <img src={item.Img} alt={item.Name} className="rounded-xl" />
              <div className="px-3 py-4">
                <h1 className="text-black text-2xl font-bold mb-2">
                  {item.Name}
                </h1>
                <h2>{item.Title}</h2>
              </div>
              <div id="project_link" className="flex gap-2 px-3 py-2">
                <a href="" className="underline text-blue-600">
                  {item.Link}
                </a>
                <a href="" className="underline text-blue-600">
                  {item.Link1}
                </a>
                <a href="" className="underline text-blue-600">
                  {item.Link2}
                </a>
                <a href="" className="underline text-blue-600">
                  {item.Link3}
                </a>
                <a href="" className="underline text-blue-600">
                  {item.Link4}
                </a>
              </div>
              <div className="flex items-center gap-4 px-3 py-4">
                {item.netlify ? (
                  <a href={item.netlify} target="_blank">
                    <button className="rounded cursor-pointer bg-black text-white hover:bg-white hover:border hover:text-black py-1 px-6 flex items-center text-sm md:text-xl gap-2">
                      Link
                      <BiLogoNetlify />
                    </button>
                  </a>
                ) : (
                  <p></p>
                )}
                <a target="_blank" rel="noopener noreferrer" href={item.gitHub}>
                  <button className="rounded cursor-pointer bg-black text-white hover:bg-white hover:border hover:text-black py-1 px-6 border flex items-center text-sm md:text-xl gap-1">
                  GitHub  <FiGithub /> 
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsMe;
