import { useState, useEffect } from "react";
import { Container, Grid, Typography, Box, Avatar } from "@mui/material";
import profilePicture from "../pp.png";
import blobPic from "../blob-haikei.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typewriter from "typewriter-effect";

// Create the theme
const theme = createTheme({});

export const About = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(180);
  const [index, setIndex] = useState(1);
  const titles = ["Software Engineer", "Full-stack Developer", "UI/UX Designer", "Data Engineer"];
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
        <div
          className="aboutImage"
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            flex: 1
          }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src={blobPic}
              alt="Background"
              style={{
                paddingTop: "10px",
                width: "400px",
                height: "auto",
                objectFit: "cover",
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
        <div style={{ flex: 2 }}>
          <div className="about-hi">
            <h1>{`Hi! I'm Özgür`}</h1>
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

            <p className="about-summary" style={{ paddingTop: "15px" }}>
              With 3+ years of experience as a Full-Stack Developer, I specialize in creating responsive, visually appealing UIs and working with data.
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default About;
