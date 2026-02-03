import { useState, useEffect } from "react";
import { Container, Grid, Typography, Box, Avatar } from "@mui/material";
import profilePicture from "../pp.png";
import blobPic from "../blob-haikei.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typewriter from "typewriter-effect";
import Socials from "./Socials";
import resume from "../Resume/Ozgur_Baltaci_Resume.pdf"
import { PiReadCvLogoBold } from "react-icons/pi";

// Create the theme
const theme = createTheme({});

export const About = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(180);
  const [index, setIndex] = useState(1);
  const titles = ["Software Development Engineer", "Data Engineer", "Full-stack Developer"];
  const period = 1600;

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: `url(${require("../About_Background.png")})`,
          backgroundSize: "cover",
        }}
        className="banner global_padding"
        id="About"
      >

        <div >
          <div className="about-hi">
            <h1>{`Hi! I'm Özgür`}</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <Typewriter
                className="type-writer"
                options={{
                  strings: titles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 100,
                  delay: 100,
                  wrapperClassName: "txt-rotate",
                  cursorClassName: "txt-rotate",
                }}
              />

              <p className="about-summary" >
                With 3+ years of experience as a Software Development Engineer, I specialize in user event tracking, building responsive and visually engaging UIs, and handling data effectively.
              </p>
              <Socials></Socials>
              <button className="download-resume" style={{ display: "flex", gap: "5px", alignItems: "center", cursor: "pointer" }}>
                <a href={resume} download={'Ozgur_Baltaci_Resume'}>Download CV</a>
                <PiReadCvLogoBold />
              </button>
            </div>
          </div>
        </div>
        <div
          className="aboutImage"
          style={{
            display: "flex",
            height: "100%",
            textAlign: "right"
          }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src={blobPic}
              alt="Background"
              style={{
                width: "400px",
                height: "auto",

              }}
            />
            <img
              alt="Profile Picture"
              src={profilePicture}
              className="avatar-picture"
              style={{
                width: "250px", // Set a fixed size for the avatar
                height: "230px", // Adjust to your desired size
                position: "absolute",
                top: "50%",
                left: "50%",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default About;
