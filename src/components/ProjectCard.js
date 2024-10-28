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
    window.open(project.liveLink, "_blank");
  };

  const handleLiveDemoClick = () => {
    window.open(project.demoLink, "_blank");
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
        <h4 style={{ fontWeight: "500" }}>{project.projectName}</h4>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <p style={{ fontWeight: "500" }}>Tech Stack:&nbsp;</p>
          <p>{project.technologiesUsed}</p>
        </div>
        <p>{project.projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
