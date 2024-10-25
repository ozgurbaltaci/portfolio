import { useState, useEffect } from "react";
import { Container, Grid, Typography, Box, Avatar } from "@mui/material";
import profilePicture from "../pp.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create the theme
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const About = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(180);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 1600;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

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
                <span className="txt-rotate" dataPeriod="1000">
                  <span className="wrap">{text}</span>
                </span>

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
