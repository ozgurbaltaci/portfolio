import React from "react";
import figmaIcon from "../SkillPictures/figma.png";
import gitIcon from "../SkillPictures/git.png";
import jsIcon from "../SkillPictures/javascript.png";
import muiIcon from "../SkillPictures/mui.svg";
import nodejsIcon from "../SkillPictures/nodejs.png";
import postgresqlIcon from "../SkillPictures/postgresql.png";
import pythonIcon from "../SkillPictures/python.webp";
import reactIcon from "../SkillPictures/react.webp";
import htmlIcon from "../SkillPictures/html.png";
import cssIcon from "../SkillPictures/css.png";
import bootstrapIcon from "../SkillPictures/bootstrap.svg";
import javaIcon from "../SkillPictures/java.png";
import reduxIcon from "../SkillPictures/redux.png";

import { Tooltip } from "react-tooltip";
import { Grid } from "@mui/system";
import "./Skills.css";

const skills = [
  { skillName: "ReactJS", skillIcon: reactIcon, backgroundColor: "#e9f7ff" },
  { skillName: "MUI", skillIcon: muiIcon, backgroundColor: "#e0f3ff" },
  { skillName: "NodeJS", skillIcon: nodejsIcon, backgroundColor: "#e4ffe5" },
  { skillName: "Python", skillIcon: pythonIcon, backgroundColor: "#fffbe3" },
  {
    skillName: "PostgreSQL",
    skillIcon: postgresqlIcon,
    backgroundColor: "#E1EAF4",
  },
  { skillName: "Figma", skillIcon: figmaIcon, backgroundColor: "#FDE2D3" },

  { skillName: "ReduxJS", skillIcon: reduxIcon, backgroundColor: "#f3e5f5" },
  { skillName: "JavaScript", skillIcon: jsIcon, backgroundColor: "#FFF7CC" },
  { skillName: "HTML5", skillIcon: htmlIcon, backgroundColor: "#ffe0cc" },
  { skillName: "CSS3", skillIcon: cssIcon, backgroundColor: "#E1EAF4" },
  {
    skillName: "Bootstrap",
    skillIcon: bootstrapIcon,
    backgroundColor: "#e8d9f1",
  },

  { skillName: "Git", skillIcon: gitIcon, backgroundColor: "#FDE4DD" },
];

const experiences = [
  {
    year: "2023",
    works: [
      {
        name: "Part-time Front-end Developer",
        company: "Turkish Aerospace",
        workdates: "Dec 2022 - Feb 2023",
        technologies_used: "ReactJS, MaterialUI, NodeJS, PostgreSQL",
        desc: `
          <ul style="padding: 0; ">
            <li style="margin-bottom: 5px;">
              Achieved 60% growth for a responsive and user-friendly dashboard
              using React JS and Material UI skills.
            </li>
            <li style="margin-bottom: 5px;">
              Developed comprehensive user requirement and use case documents
              using effective communication and thorough documentation skills.
            </li>
            <li style="margin-bottom: 5px;">
              Led front-end development initiatives, resulting in a 100%
              improvement in user interface responsiveness and overall user
              experience.
            </li>
            <li>
              Contributed to Agile and Scrum methodologies, ensuring efficient
              project delivery throughout the Software Development Life Cycle
              (SDLC).
            </li>
          </ul>`,
      },
    ],
  },
  {
    year: "2022",
    works: [
      {
        name: "Intern Software Developer - Long Term",
        company: "Turkish Aerospace (TUSAS)",
        workdates: "Dec 2021 - Jul 2022",
        technologies_used: "ReactJS, Bootstrap, Express JS, Next JS",
        desc: `
          <ul style="padding: 0; ">
            <li style="margin-bottom: 5px;">
              Achieved 85% growth for a comprehensive, responsive and user-friendly Data Management System using React JS, Bootstrap, Express JS, and Next JS skills.
            </li>
            <li style="margin-bottom: 5px;">
              Developed comprehensive user requirement and use case documents using effective communication and thorough documentation skills.
            </li>
            <li>
              Contributed to Agile and Scrum methodologies, ensuring efficient project delivery throughout the Software Development Life Cycle (SDLC).
            </li>
          </ul>`,
      },
    ],
  },
  {
    year: "2021",
    works: [
      {
        name: "Volunteer Software Developer Intern",
        company: "Jeli AI",
        workdates: "Oct 2021 - Dec 2021",
        technologies_used: "Vue JS",
        desc: `
          <ul style="padding: 0; ">
            <li style="margin-bottom: 5px;">
              Developed foundational skills in front-end development using Vue JS during my amateur phase.
            </li>
            <li style="margin-bottom: 5px;">
              Created essential components such as footers and card holders to gain practical experience.
            </li>
            <li>
              Actively contributed to collaborative teamwork, learning and growing as an aspiring developer during this period.
            </li>
          </ul>`,
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills">
      <h2
        style={{
          display: "flex",
          justifyContent: "center",

          padding: "1rem 0rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>Skills</div>
          <div className="just-skills-title">&nbsp;& Experiences</div>
        </div>
      </h2>

      <div className="skills-and-experiences">
        {" "}
        <div className="skills-container">
          <Grid container justifyContent="center" alignItems="center">
            {skills.map((item, index) => (
              <Grid
                className="skills-list"
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
              >
                <div className="skills-item">
                  <div style={{ backgroundColor: item.backgroundColor }}>
                    <img src={item.skillIcon} alt={item.skillName} />
                  </div>
                  <p>{item.skillName}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>{" "}
        <div className="experiences-container">
          <h3 className="experiences-title">Experiences</h3>
          <div className="experiences-list">
            {experiences.map((experience) => (
              <div>
                <div className="app__skills-exp-item" key={experience.year}>
                  <div className="app__skills-exp-year">
                    <h4>{experience.year}</h4>
                  </div>
                  <div className="app__skills-exp-works">
                    {experience.works.map((work) => (
                      <div
                        className="app__skills-exp-work"
                        key={work.name}
                        data-tooltip-id={work.desc ? "my-tooltip" : undefined}
                        data-tooltip-html={`<div>${work.desc}</div>`}
                      >
                        <h4 className="skills_company_name">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                        <p>{work.technologies_used}</p>
                        <p>{work.workdates}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Tooltip className="skills-tooltip" id="my-tooltip" />
    </div>
  );
};

export default Skills;
