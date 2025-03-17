import React from "react";
import SocialConnections from "../components/SocialConnections";
import Skils from "../components/Skils";
import ProjectsMe from "../components/ProjectsMe";
import MyPortfolio from "../components/MyPortfolio";
import CantactMe from "../components/CantactMe";
import AboutMe from "../components/AboutMe";
const Home = () => {
  return (
    <div className="">
      <MyPortfolio />
      <AboutMe />
      <Skils />
      <ProjectsMe />
      <CantactMe />
      <SocialConnections />
    </div>
  );
};

export default Home;
