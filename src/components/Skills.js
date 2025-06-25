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
import typeScriptIcon from "../SkillPictures/typescript.png";

import reduxIcon from "../SkillPictures/redux.png";
import graphqlIcon from "../SkillPictures/graphql.png";
import dotnetIcon from "../SkillPictures/dotnet.png";

import { HiOutlineLink } from "react-icons/hi2";


import { Tooltip } from "react-tooltip";
import { borderBottom, Grid } from "@mui/system";
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
  { skillName: "JavaScript", skillIcon: jsIcon, backgroundColor: "#FFF7CC" },
  { skillName: "TypeScript", skillIcon: typeScriptIcon, backgroundColor: "#D6E7FF" },

  { skillName: ".NET", skillIcon: dotnetIcon, backgroundColor: "#f3e5f5" },

  { skillName: "GraphQL", skillIcon: graphqlIcon, backgroundColor: "#F8EEFF" },


  { skillName: "Figma", skillIcon: figmaIcon, backgroundColor: "#FDE2D3" },


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
          " Collaborated within a dynamic, international Agile team located in Barcelona, where the opportunity to work alongside professionals from diverse backgrounds enriched my problem-solving, communication, and development skills, ensuring high-quality project delivery.",
          "Gained valuable experience in FlutterFlow, developing fully responsive web and mobile applications, while expanding backend knowledge through ongoing learning of GraphQL and Flask to enhance system capabilities.",
          "Designed user-centric, responsive interfaces using Figma, prioritizing seamless user experience and intuitive design for both web and mobile platforms."
        ],
      },
    ],
  },
  {
    year: "2023",
    works: [
      {
        name: "Part-time Software Engineer",
        company: "Turkish Aerospace (TUSAS)",
        linkedin: "https://www.linkedin.com/company/turkishaerospace/posts/?feedView=all",

        place: "Antalya, Türkiye",

        workdates: "12/2022 - 02/2023",
        technologies_used: "ReactJS, MaterialUI, NodeJS, PostgreSQL",
        desc: [
          "Achieved 60% growth for a responsive and user-friendly dashboard using ReactJS and Material-UI, collaborating with a professional development team to ensure high-quality implementation.", "Worked closely with senior developers to enhance user interface responsiveness and overall user experience, leading to a 100% improvement in performance and usability.", "Contributed to Agile and Scrum methodologies, ensuring efficient project delivery throughout the Software Development Life Cycle (SDLC), while learning from seasoned professionals who guided our 13-person team through best practices and real-world challenges."],
      },
    ],
  },
  {
    year: "2022",
    works: [
      {
        name: "Long Term Software Engineer Intern",
        company: "Turkish Aerospace (TUSAS)",
        linkedin: "https://www.linkedin.com/company/turkishaerospace/posts/?feedView=all",

        place: "Antalya, Türkiye",
        workdates: "12/2021 - 07/2022",
        technologies_used: "ReactJS, Bootstrap, Express JS, Next JS",
        desc: [
          "Achieved 95% growth for a comprehensive, responsive, and user-friendly Data Management System using ReactJS, Bootstrap, NodeJS, and ExpressJS. Gained valuable insights from an experienced mentor while collaborating on a business project, enhancing my project management skills and cross-disciplinary experience.", "Developed comprehensive user requirement and use case documents for two projects, improving team alignment and reducing revisions by 70% through effective communication and thorough documentation. This experience reinforced my ability to structure and manage project workflows efficiently.", "Contributed to Agile and Scrum methodologies, ensuring efficient project delivery throughout the Software Development Life Cycle (SDLC), while learning from seasoned professionals who guided our 13-person team through best practices and real-world challenges."],
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
          "Worked on real-world projects for the first time through a volunteer-based initiative, applying theoretical knowledge to practical challenges while enhancing teamwork and problem-solving skills.", "Developed foundational skills in front-end development by building 10+ interactive web components using VueJS, gaining hands-on experience and improving proficiency in JavaScript frameworks during my early stage of learning."
        ],
      },
    ],
  },
];

const education = [

  {
    field: "Computer Science and Engineering",
    university: "Akdeniz University",
    place: "Antalya, Türkiye",
    workdates: "09/2019 - 07/2024",
    description: "GPA: 3.39/4.0"
  },
  {
    field: "Business and Economics",
    university: "Mendelu University",
    place: "Brno, Czech Republic",
    workdates: "02/2023 - 07/2023",
    description: "Erasmus+ study exchange"
  },



];

const Skills = () => {
  return (
    <div id="Skills&Experiences" className="skills global_padding">


      <div className="skills-and-experiences">

        <div className="experiences-container">
          <div style={{ width: "100%", borderBottom: "2px solid black" }}><h3 >Experiences</h3></div>

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



                          <p style={{ fontSize: "12px" }}>{work.workdates}</p>
                        </div>


                        <div style={{ fontSize: "12px", fontStyle: "italic", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

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
        <div>
          <div style={{ display: "flex", width: "100%", borderBottom: "2px solid black" }}><h3 >Skills</h3><h3 className="dependent-education-title">&nbsp;&&nbsp;Education</h3></div>

          <div className="skills-and-education">
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
            <div className="education-container">
              <h3 className="shrinked-education-title" style={{ display: "none", width: "100%", borderBottom: "2px solid black" }}>Education</h3>
              <div className="education-list">
                {education.map((education) => (
                  <div>



                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                      <h5 className="skills_company_name">{education.field}</h5>



                      <p style={{ fontSize: "12px" }}>{education.workdates}</p>
                    </div>


                    <div style={{ fontSize: "12px", fontStyle: "italic", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                      <p>{education.university}</p>
                      <p>{education.place}</p>

                    </div>

                    <div className="app__skills-exp-work-list">
                      <p>{education.description}</p>

                    </div>

                  </div>

                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tooltip className="skills-tooltip" id="my-tooltip" />
    </div >
  );
};

export default Skills;
