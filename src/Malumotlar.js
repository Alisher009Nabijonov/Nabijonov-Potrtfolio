import Html from "./assets/html-5.svg";
import Css from "./assets/css3.svg";
import Bootstrap from "./assets/bootstrap (1).svg";
import Js from "./assets/javascript.svg";
import React from "./assets/react.svg";
import Tailwind from "./assets/tailwind-css.svg";
import Git from "./assets/git.svg";
import GitHub from "./assets/github.svg";
import Redux from "./assets/redux.svg";
import Sass from "./assets/sass.svg";

export const skills = [
  {
    id: 1,
    img: Html,
    title: "HTML",
  },
  {
    id: 2,
    img: Css,
    title: "CSS",
  },
  {
    id: 3,
    img: Bootstrap,
    title: "Botstrap",
  },
  {
    id: 4,
    img: Js,
    title: "JavaScript",
  },
  {
    id: 5,
    img: React,
    title: "React",
  },
  {
    id: 6,
    img: Tailwind,
    title: "Tailwind CSS",
  },
  {
    id: 7,
    img: Git,
    title: "Git",
  },
  {
    id: 8,
    img: GitHub,
    title: "GitHub",
  },
  {
    id: 9,
    img: Sass,
    title: "Sass",
  },
  {
    id: 10,
    img: Redux,
    title: "Redux",
  },
];

// Projects

import Yevro from "./assets/Projectyevro.jpg";
import Instagram from "./assets/Projectyevro.jpg";
import Hekto from "./assets/Projecthekto.jpg";
import Tastebite from "./assets/Projecttastebite.jpg";
import { Link } from "react-router-dom";

export const Projects = [
  {
    id: 1,
    Img: Yevro,
    Name: "Yevro-vent",
    Title:
      "This web site was created while learning react. This web site was created while learning react. ",
    Link: "#html",
    Link1: "#css",
    Link2: "#JavaScript",
    Link3: "#React",
    Link4: "#Tailwind",
    netlify: "https://alisher-nabijonov-yevro-vend.netlify.app/",
    gitHub: "https://github.com/Muhammadali-fr/Delizi",
  },
  {
    id: 2,
    Img: Instagram,
    Name: "Instagram clone",
    Title: "We created this website with the help of my partner for the exam.",
    Link: "#html",
    Link1: "#css",
    Link2: "#JavaScript",
    Link3: "#React",
    Link4: "#Tailwind",
    // netlify: "https://benevolent-croissant-7f2247.netlify.app/",
    gitHub: "https://github.com/Muhammadali-fr/Delizi",
  },
  {
    id: 3,
    Img: Hekto,
    Name: "Hekto",
    Title: "This web site was created while learning react.",
    Link: "#html",
    Link1: "#css",
    Link2: "#JavaScript",
    Link3: "#React",
    Link4: "#Tailwind",
    netlify: "https://alisher-nabijonov-hekto.netlify.app/",
    gitHub: "https://github.com/Muhammadali-fr/Delizi",
  },
  {
    id: 4,
    Img: Tastebite,
    Name: "Tastebite",
    Title: "This website was created while learning JavaScript.",
    Link: "#html",
    Link1: "#css",
    Link2: "#JavaScript",
    netlify: "https://alisher-nabijonov-tastebite.netlify.app/",
    gitHub: "https://github.com/Muhammadali-fr/Delizi",
  },
];
