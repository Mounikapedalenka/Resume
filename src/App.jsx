import React from "react";
import "./App.css";

// keep your page components
import Home from "./pages/Home";
import About from "./pages/About";       // this will be the Skills section
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-root">
      {/* Header - fixed */}
      <header className="header">
        <h1 className="title">
          <span className="port">Port</span>
          <span className="folio">folio</span>
        </h1>

        {/* Use anchor links to scroll to sections on same page */}
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          {/* Resume file inside public/ -> use root path /Mounika resume.pdf */}
          <a
            className="btn download"
            href="/Mounika_Resume.pdf"
            download="Mounika_Pedalenka_Resume.pdf"
            aria-label="Download CV"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </nav>
      </header>

      {/* Main content - sections rendered in the exact order you want */}
      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>

        {/* About component used as Skills section (keep naming if you like) */}
        <section id="skills" className="section">
          <About />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
