import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans", sans-serif',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <About />
          <Skills />

          <Experience></Experience>
          <Work />
          <Projects />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
