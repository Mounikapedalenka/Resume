import React from "react";
import "./About.css";
import { FaBriefcase, FaTools, FaCertificate, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-section">

      {/* TECHNICAL SKILLS */}
   <div className="about-card4">
  <h3><FaTools /> Technical Skills</h3>

  <div className="skills-group">

    {/* Programming Languages */}
    <div className="skill-row horizontal">
      <h4 className="skill-title">Programming Languages</h4>
      <div className="pill-container1">
        <span className="pill1">Java</span>
        <span className="pill1">Python</span>
      </div>
    </div>

    {/* Web Frameworks */}
    <div className="skill-row horizontal">
      <h4 className="skill-title">Web Frameworks </h4>
      <div className="pill-container1">
        <span className="pill1">HTML</span>
        <span className="pill1">CSS</span>
        <span className="pill1">JavaScript</span>
        <span className="pill1">React</span>
        <span className="pill1">Spring Boot</span>
      </div>
    </div>

    {/* Databases */}
    <div className="skill-row horizontal">
      <h4 className="skill-title">Databases</h4>
      <div className="pill-container1">
        <span className="pill1">SQL</span>
        <span className="pill1">CockroachDB</span>
        <span className="pill1">H2 Database</span>
      </div>
    </div>

    {/* Version Control */}
    <div className="skill-row horizontal">
      <h4 className="skill-title">Version Control</h4>
      <div className="pill-container1">
        <span className="pill1">Git</span>
        <span className="pill1">GitHub</span>
        <span className="pill1">Postman</span>
      </div>
    </div>

    {/* Tools */}
    <div className="skill-row horizontal">
      <h4 className="skill-title">Tools & Utilities</h4>
      <div className="pill-container1">
        <span className="pill1">VS Code</span>
        <span className="pill1">Jupyter Notebook</span>
        <span className="pill1">Camunda</span>
      </div>
    </div>

  </div>
</div>



      {/* INTERNSHIPS */}
      <div className="about-card3">
        <h3><FaBriefcase /> Internships</h3>

        <div className="intern-grid">
          {/* Flip card 1 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <strong>VERZEO (03/2022 - 05/2022)</strong>
                <p>Learned Machine Learning using Python.</p>
              </div>
              <div className="flip-card-back">
          
                <p style={{ color: "#072038" }}><b>Welcome <br></br>Click below to see the certificate</b></p>
                <a
                  className="cert-link"
                  href="/WhatsApp Image 2024-06-25 at 22.28.33_27adcaa4.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>

          {/* Flip card 2 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <strong>RISE CORPORATION (08/2023 - 09/2023)</strong>
                <p>React.js & SPA development.</p>
              </div>
              <div className="flip-card-back">
         
                <p style={{ color: "#072038" }}><b>Welcome <br></br>Click below to see the certificate</b></p>
                <a
                  className="cert-link"
                  href="/Rise.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>

          {/* Flip card 3 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <strong>KSHEMA GENERAL INSURANCE (08/2024 - 11/2024)</strong>
                <p>Backend development: Java, Spring Boot, Camunda, CockroachDB.</p>
              </div>
              <div className="flip-card-back">
  <p style={{ color: "#072038" }}><b>Welcome <br></br>Click below to see the certificate</b></p>
                <a
                  className="cert-link"
                  href="/Kshema.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end internships card */}

      {/* CERTIFICATIONS */}
      <div className="about-card2">
        <h3><FaCertificate /> Certifications</h3>

        <div className="pill-container2">
          <p
            className="pill2"
          >
            Cloud Computing – NPTEL
          </p>

              <p
            className="pill2"
          >
            Business Intelligence – NPTEL
          </p>

          <p
            className="pill2"
          >
            ML With Python – AWS
          </p>

          <p
            className="pill2"
          >
            React JS – Coursera
          </p>

          <p
            className="pill2"
          >
            Java – Internship Studio
          </p>
        </div>
      </div>

      {/* INTERESTS */}
      <div className="about-card1">
        <h3><FaHeart /> Interests</h3>

        <div className="pill-container3">
          <span className="pill3">Web Designing</span>
          <span className="pill3">Drawing</span>
          <span className="pill3">Animations</span>
          <span className="pill3">Video Editing</span>
        </div>
      </div>

    </div>
  );
}
