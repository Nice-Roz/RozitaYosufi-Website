import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import { themeContext } from "./Context";
import { useContext } from "react";
import About from "./Component/About/About";
import ColorThemeSwitcher from "./Component/ColorThemeSwitcher/ColorThemeSwitcher";
import Portfilio from "./Component/Portfilio/Portfilio";
import Timeline from "./Component/Timeline/Timeline";
import Teachers from "./Component/Teachers/Teachers";
import Projects from "./Component/Projects/Projects";
import Contact from "./Component/Contact/Contact";
import FormContact from "./Component/Contact/FormContact";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <main className="main">
        <div
          className="blur"
          style={{
            background: "var(--background)",
            top: "0rem",
            width: "2em",
            height: "240rem",
            left: "-2rem",
          }}
        ></div>
        <ColorThemeSwitcher />
        <Portfilio />
        <About />
        <Timeline />
        <Projects />
        <Teachers />
        <FormContact />
        <Contact />
        <div
          className="blur blur-left"
          style={{
            background: "var(--background)",
            top: "0rem",
            width: "2em",
            height: "240rem",
          }}
        ></div>
      </main>
    </div>
  );
}

export default App;
