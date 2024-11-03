import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalStyles } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <About className="global_padding" />
        <Skills className="global_padding" />

        <Projects className="global_padding" />
        <Contact className="global_padding"></Contact>
        <Footer className="global_padding" />
      </ThemeProvider>
    </>
  );
}

export default App;
