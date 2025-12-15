import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        Feel free to reach out for opportunities, collaborations, or queries.
      </p>

      <div className="contact-card">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>mounikapedalenka273@gmail.com</span>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/mounika-pedalenka-a95081247/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/Mounikapedalenka"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
