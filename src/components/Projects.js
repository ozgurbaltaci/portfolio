import React from "react";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    projectImg: require("../projects_pics/handyGreen.png"),
    projectName: "HandyGreen Front-end",
    projectDescription:
      "Built a full-stack e-commerce platform for handmade and organic product sellers using React.js, Material UI, Node.js, Express.js, and PostgreSQL. Integrated Iyzico payment gateaway for secure payments. Features include product listing, shopping cart, user authentication, order management, and payment processing. Deployed on Vercel.",
    technologiesUsed: "ReactJS, MUI, NodeJS, ExpressJS, PostgreSQL, HTML5 & CSS3",
    githubLink: "https://github.com/ozgurbaltaci/e-commerce",
    demoLink: "https://www.youtube.com/watch?v=uOsiLIBxKVo",
    liveLink: "https://handygreen.vercel.app/",
  },
  {
    projectImg: require("../projects_pics/portfolio.png"),
    projectName: "Fully-responsive Portfolio",
    projectDescription: "Designed and developed a fully responsive personal portfolio using React.js and Material UI. The website highlights my experiences, skills, and projects, with features such as a downloadable CV and an integrated contact form. Deployed on Vercel.",
    technologiesUsed: "ReactJS, MUI, HTML5 & CSS3",
    githubLink: "https://github.com/ozgurbaltaci/portfolio",
    demoLink: "",
    liveLink: "https://ozgurbaltaci.vercel.app/",
  },
  {
    projectImg: require("../projects_pics/never-have-i-never.png"),
    projectName: "Never Have I Ever – Full-Stack Web Game",
    projectDescription: "Developed a web-based 'Never Have I Ever' game using React. Players can create or join password-protected rooms, contribute questions, and start the game to display them randomly. Designed for group play on shared screens like a TV.",
    technologiesUsed: "ReactJS, MUI, NodeJS, ExpressJS, PostgreSQL, HTML5 & CSS3",
    githubLink: "https://github.com/ozgurbaltaci/never-have-i-ever-game",
    demoLink: "",
    liveLink: "",
  },
  {
    projectImg: require("../projects_pics/yummy.jpg"),
    projectName: "YummY Restaurant Management App",
    projectDescription: "We built a restaurant management full-stack application aimed at streamlining operations, enhancing communication, and optimizing efficiency with distinct interfaces for waitstaff, chefs, and cashiers, utilizing ReactJS and NodeJS.",
    technologiesUsed: "ReactJS, HTML, CSS, C#",
    githubLink: "https://github.com/bengisusaahin/YummY",
    demoLink: "",
    liveLink: "",
  },
  {
    projectImg: require("../projects_pics/organics.png"),
    projectName: "Organics, E-commerce Mobile App",
    projectDescription: "We built an e-commerce app that facilitates a marketplace for organic product vendors to sell their goods online by using Java and Firebase.",
    technologiesUsed: "Java, Android Studio, Firebase",
    githubLink: "https://github.com/ozgurbaltaci/Organics-E-commerce-app",
    demoLink: "",
    liveLink: "",
  },

];

const Projects = () => {
  return (
    <div id="Projects" className="projects global_padding">
      <h2
        style={{
          display: "flex",
          justifyContent: "center",

          padding: "1rem 0rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>Projects</div>
        </div>
      </h2>{" "}
      <div className="projects-container">
        <Grid container spacing={3}>
          {projects.map((item, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <ProjectCard project={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
