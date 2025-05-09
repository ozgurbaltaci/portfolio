import React from "react";
import "./ProjectCard.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import YouTubeIcon from "@mui/icons-material/YouTube";

const ProjectCard = ({ project }) => {
  const handleGitHubClick = () => {
    window.open(project.githubLink, "_blank");
  };

  const handleDeployedDemoClick = () => {
    if (project.liveLink !== "") {
      window.open(project.liveLink, "_blank");
    } else {
      alert("I am sorry :( This project is not deployed yet.");
    }
  };

  const handleLiveDemoClick = () => {
    if (project.demoLink !== "") {
      window.open(project.demoLink, "_blank");
    } else {
      alert("I am sorry :( Demo is not available for this project yet.");
    }
  };

  return (
    <div className="project-card">
      <div className="project-inner-div">
        <div className="img-container">
          <img
            src={project.projectImg}
            alt={`${project.projectName} snapshot`}
          />
          <div className="project-overlay">
            <button className="icon-button" onClick={handleGitHubClick}>
              <GitHubIcon />
            </button>
            <button className="icon-button" onClick={handleLiveDemoClick}>
              <YouTubeIcon />
            </button>
            <button className="icon-button" onClick={handleDeployedDemoClick}>
              <LinkIcon />
            </button>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <h4 style={{ fontWeight: "500" }}>{project.projectName}</h4>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <p style={{ fontWeight: "500" }}>Tech Stack:&nbsp;</p>
            <p>{project.technologiesUsed}</p>
          </div>
          <p>{project.projectDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
