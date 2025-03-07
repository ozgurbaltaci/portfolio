import React from "react";
import figmaIcon from "../SkillPictures/figma.png";
import gitIcon from "../SkillPictures/git.png";
import jsIcon from "../SkillPictures/javascript.png";
import muiIcon from "../SkillPictures/mui.svg";
import nodejsIcon from "../SkillPictures/nodejs.png";
import flutterFlowIcon from "../SkillPictures/flutterflow.png";
import postgresqlIcon from "../SkillPictures/postgresql.png";
import pythonIcon from "../SkillPictures/python.webp";
import reactIcon from "../SkillPictures/react.webp";
import htmlIcon from "../SkillPictures/html.png";
import cssIcon from "../SkillPictures/css.png";
import bootstrapIcon from "../SkillPictures/bootstrap.svg";
import javaIcon from "../SkillPictures/java.png";
import reduxIcon from "../SkillPictures/redux.png";
import graphqlIcon from "../SkillPictures/graphql.png";
import { HiOutlineLink } from "react-icons/hi2";


import { Tooltip } from "react-tooltip";
import { Grid } from "@mui/system";
import "./Skills.css";

const skills = [
  { skillName: "ReactJS", skillIcon: reactIcon, backgroundColor: "#e9f7ff" },
  { skillName: "ReduxJS", skillIcon: reduxIcon, backgroundColor: "#f3e5f5" },

  { skillName: "MUI", skillIcon: muiIcon, backgroundColor: "#e0f3ff" },
  { skillName: "FlutterFlow", skillIcon: flutterFlowIcon, backgroundColor: "#EBE6F6" },
  { skillName: "NodeJS", skillIcon: nodejsIcon, backgroundColor: "#e4ffe5" },
  {
    skillName: "PostgreSQL",
    skillIcon: postgresqlIcon,
    backgroundColor: "#E1EAF4",
  },
  { skillName: "Python", skillIcon: pythonIcon, backgroundColor: "#fffbe3" },
  { skillName: "GraphQL", skillIcon: graphqlIcon, backgroundColor: "#F8EEFF" },


  { skillName: "Figma", skillIcon: figmaIcon, backgroundColor: "#FDE2D3" },

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
    year: "2025",
    works: [
      {
        name: "Full-stack Developer Erasmus+ Intern",
        company: "Proceedit",
        linkedin: "https://www.linkedin.com/company/proceedit-the-bpm-process'%E2%80%8B-factory-/posts/?feedView=all",
        place: "Barcelona, Spain",
        workdates: "01/2025 - Present",
        technologies_used: "Flutterflow, Figma, GraphQL, Flask",
        desc: [
          "Experienced in FlutterFlow for fully responsive web/mobile development. Learning GraphQL & Flask to enhance backend capabilities.",
          "Skilled in Figma to create responsive, user-friendly designs with a focus on seamless UX.",
          "Proficient in Jira, collaborating in Agile teams for efficient development and problem-solving."
        ],
      },
    ],
  },
  {
    year: "2023",
    works: [
      {
        name: "Part-time Front-end Developer",
        company: "Turkish Aerospace (TUSAS)",
        linkedin: "https://www.linkedin.com/company/turkishaerospace/posts/?feedView=all",

        place: "Antalya, Türkiye",

        workdates: "12/2022 - 02/2023",
        technologies_used: "ReactJS, MaterialUI, NodeJS, PostgreSQL",
        desc: [
          "Achieved 60% growth for a responsive and user-friendly dashboard using ReactJS, and MaterialUI skills.",
          "Contributed to front-end development, achieving a 100% improvement in user interface responsiveness and overall user experience.",
          "Contributed to Agile and Scrum methodologies, ensuring efficient project delivery throughout the Software Development Life Cycle (SDLC)."
        ],
      },
    ],
  },
  {
    year: "2022",
    works: [
      {
        name: "Intern Software Developer - Long Term",
        company: "Turkish Aerospace (TUSAS)",
        linkedin: "https://www.linkedin.com/company/turkishaerospace/posts/?feedView=all",

        place: "Antalya, Türkiye",
        workdates: "12/2021 - 07/2022",
        technologies_used: "ReactJS, Bootstrap, Express JS, Next JS",
        desc: [
          "Achieved 85% growth for an comprehensive, responsive and user-friendly Data Management System using ReactJS, Bootstrap, ExpressJS and NextJS skills.",
          "Developed comprehensive user requirement and use case documents for 2 projects, improving team alignment and reducing revisions by 70% through effective communication and thorough documentation skills",
          "Contributed to Agile and Scrum methodologies, ensuring efficient project delivery throughout the Software Development Life Cycle (SDLC)."
        ],
      },
    ],
  },
  {
    year: "2021",
    works: [
      {
        name: "Volunteer Software Developer Intern",
        company: "Jeli AI",
        linkedin: "https://www.linkedin.com/company/jeliai/",
        place: "Antalya, Türkiye",
        workdates: "10/2021 - 12/2021",
        technologies_used: "Vue JS",
        desc: [
          "Developed foundational skills in front-end development by building 10+ interactive web components using VueJS, gaining hands-on experience and improving proficiency in JavaScript frameworks during my early stage of learning.",

        ],
      },
    ],
  },
];

const Skills = () => {
  return (
    <div id="Skills&Experiences" className="skills global_padding">
      <h3
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
      </h3>

      <div className="skills-and-experiences">
        <div className="skills-container">
          {skills.map((item, index) => (
            <div className="skills-item" key={index}>
              <div className="skill-icon" style={{ backgroundColor: item.backgroundColor }}>
                <img src={item.skillIcon} alt={item.skillName} />
              </div>
              <p>{item.skillName}</p>
            </div>
          ))}
        </div>

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

                      >
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                          <h5 className="skills_company_name">{work.name}</h5>



                          <p style={{ fontSize: "11px" }}>{work.workdates}</p>
                        </div>


                        <div style={{ fontSize: "11px", fontStyle: "italic", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                          <a href={work.linkedin} target="_blank" style={{ textDecoration: "none", color: "#000000" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                              <p>{work.company}</p>
                              <div className="icon">
                                <HiOutlineLink />
                              </div>
                            </div>
                          </a>
                          <p>{work.place}</p>

                        </div>

                        <div className="app__skills-exp-work-list">
                          <ul style={{ padding: 0 }}>
                            {work.desc.map((item, index) => (
                              <li key={index} style={{ marginBottom: "5px" }}>
                                {item}
                              </li>
                            ))}
                          </ul>

                        </div>

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
    </div >
  );
};

export default Skills;
