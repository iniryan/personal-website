import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Service from "./components/Services/Service";
import Project from "./components/Projects/Project";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import lightMe from "../src/assets/me.webp";
import darkMe from "../src/assets/me-dark.webp";
import aboutmeLight from "../src/assets/aboutme.webp";
import aboutmeDark from "../src/assets/aboutme-dark.webp";
import lightMap from "../src/assets/javamap.png";
import darkMap from "../src/assets/javamap-dark.png";

function App() {
  
  const [darkMode,setDarkMode] = useState(localStorage.getItem('darkMode') === "true" ? true : false);
  const toggleMode = () => {
    const newMode = localStorage.getItem('darkMode') === "true" ? false : true;
    setDarkMode(newMode);
    localStorage.setItem('darkMode',newMode);
  }
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Router>
        <Header toggleMode={toggleMode} darkMode={darkMode} />
        <Home me={darkMode ? darkMe : lightMe} />
        <Service />
        <Project />
        <About aboutme={darkMode ? aboutmeDark : aboutmeLight} />
        <Contact map={darkMode ? darkMap : lightMap} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
