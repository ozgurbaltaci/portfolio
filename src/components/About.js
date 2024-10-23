import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import profilePicture from "../pp.jpg";

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
    <section
      style={{
        backgroundImage: `url(${require("../About_Background.png")})`,
        backgroundSize: "cover", // Adjust as needed
      }}
      className="banner"
      id="home"
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h2" component="h1">
                {`Hi! I'm Özgür`} <div></div>
                <span className="txt-rotate" dataPeriod="1000">
                  <span className="wrap">{text}</span>
                </span>
              </Typography>

              <Typography>
                With 2+ years of experience, I am specializing in creating
                responsive and visually appealing user interfaces and working
                with data.
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowRightAltIcon />}
                onClick={() => console.log("connect")}
              >
                Let’s Connect
              </Button>
            </Box>
          </Grid>
          <Grid className="avatar" item xs={12} md={6}>
            <Avatar
              alt="Profile Picture"
              src={profilePicture}
              sx={{ width: 300, height: 300 }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
