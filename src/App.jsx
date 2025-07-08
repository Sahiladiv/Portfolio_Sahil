import React from "react";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import About from "./components/About";
import Technology from "./components/Technology";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Add padding to avoid overlap with fixed nav */}
        <About />
        <Education />
        <Technology />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
