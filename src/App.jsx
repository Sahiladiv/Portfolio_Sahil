import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Technology from "./components/Technology";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Technology />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </main>
    </div>
  );
};

export default App;
