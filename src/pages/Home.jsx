import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  FaLinkedin,
  FaGithub,
  FaHackerrank,
  FaEnvelope
} from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

export default function Home() {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Web Developer"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="home-left">
        <h1 className="home-name">
          Hi, I'm <span>Mounika Pedalenka</span>
        </h1>

        <h2 className="typing-role">{roles[index]}</h2>

        <p className="home-info">
          I am passionate about building responsive and user-friendly web
          applications using React, Spring Boot, SQL, and cloud technologies.
          I enjoy creating visually appealing interfaces, implementing smooth
          animations, and ensuring seamless user experiences.
        </p>

        {/* 🔗 SOCIAL ICONS */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/mounika-pedalenka-a95081247/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Mounikapedalenka"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.hackerrank.com/profile/21341A05D5"
            target="_blank"
            rel="noopener noreferrer"
            title="HackerRank"
          >
            <FaHackerrank />
          </a>

          <a
            href="https://www.codechef.com/users/p_mounika123"
            target="_blank"
            rel="noopener noreferrer"
            title="CodeChef"
          >
            <SiCodechef />
          </a>

          <a
            href="mailto:mounikapedalenka273@gmail.com"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="home-right">
        <img src="/photo.jpg" alt="Profile" className="profile-img" />
      </div>
    </div>
  );
}
