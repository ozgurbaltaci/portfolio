import { useState, useEffect } from "react";
import { Container, Grid, Typography, Box, Avatar } from "@mui/material";
import profilePicture from "../pp.jpg";
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
  const titles = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 1600;

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: `url(${require("../About_Background.png")})`,
          backgroundSize: "cover",
          padding: "20px",
        }}
        className="banner"
        id="home"
      >
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={2}>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Avatar
                alt="Profile Picture"
                src={profilePicture}
                className="avatar-picture"
                sx={{ width: 250, height: 250 }}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
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

                <Typography variant="body1" className="about-summary">
                  With 2+ years of experience, I specialize in creating
                  responsive and visually appealing user interfaces and working
                  with data.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default About;
