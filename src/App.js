import "./App.css";
import { Home } from "./components/home";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Abilities } from "./components/skills";
import { Projects } from "./components/projects";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/theme";
import { Contact } from "./components/contact";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
      <Header/>
      <Home/>
      <About/>
      <Abilities/>
      <Projects/>
      <Contact/>
      </ThemeProvider>
    </>
  );
}

export default App;