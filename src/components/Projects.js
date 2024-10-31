import React from "react";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    projectImg: require("../projects_pics/handyGreen.png"),
    projectName: "HandyGreen Front-end",
    projectDescription:
      "E-commerce application for locals to sell their hand-made and/or organic products.",
    technologiesUsed: "ReactJS, MUI, JavaScript",
    githubLink: "https://github.com/ozgurbaltaci/e-commerce",
    demoLink: "https://www.youtube.com/watch?v=uOsiLIBxKVo",
    liveLink: "https://handygreen.vercel.app/",
  },
  {
    projectImg: require("../projects_pics/handyGreen.png"),
    projectName: "HandyGreen Front-end",
    projectDescription:
      "E-commerce application for locals to sell their hand-made and/or organic products.",
    technologiesUsed: "ReactJS, MUI, JavaScript",
    githubLink: "https://github.com/ozgurbaltaci/e-commerce",
    demoLink: "https://www.youtube.com/watch?v=uOsiLIBxKVo",
    liveLink: "https://handygreen.vercel.app/",
  },
  {
    projectImg: require("../projects_pics/handyGreen.png"),
    projectName: "HandyGreen Front-end",
    projectDescription:
      "E-commerce application for locals to sell their hand-made and/or organic products.",
    technologiesUsed: "ReactJS, MUI, JavaScript",
    githubLink: "https://github.com/ozgurbaltaci/e-commerce",
    demoLink: "https://www.youtube.com/watch?v=uOsiLIBxKVo",
    liveLink: "https://handygreen.vercel.app/",
  },
  {
    projectImg: require("../projects_pics/handyGreen.png"),
    projectName: "HandyGreen Front-end",
    projectDescription:
      "E-commerce application for locals to sell their hand-made and/or organic products.",
    technologiesUsed: "ReactJS, MUI, JavaScript",
    githubLink: "https://github.com/ozgurbaltaci/e-commerce",
    demoLink: "https://www.youtube.com/watch?v=uOsiLIBxKVo",
    liveLink: "https://handygreen.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="projects">
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
