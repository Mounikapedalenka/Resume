import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "An online weather application that provides real-time weather updates for any location. It displays temperature, humidity, wind speed, and weather conditions using live API data. The app features a responsive interface for smooth usage across mobile and desktop devices.",
      category: "web",
      image: "/Weather-App.png",
      link: "https://weather-app-gules-eight-8k7g24og06.vercel.app/"
    },
    {
      id: 2,
      title: "Restaurant Billing Management System",
      description:
        "It allows users to efficiently generate and manage bills. It facilitates item selection,and streamlining the billing process for restaurant operations.And also ensures accurate and error-free billing by validating inputs and presenting a clear summary of the final bill for easy review.",
      category: "java",
      image: "/Applet.png",
      link: "https://github.com/Mounikapedalenka/Java-Projects/blob/main/Check.java"
    },
    {
      id: 3,
      title: "RUNWAY LIGHTING SYSTEM USING ARDUINO (In IOT) ",
      description:
        "The runway lighting system leverages Arduino -based controls for rapid activation and dynamic lighting adjustments using real-time sensor data, enhancing safety and reducing reaction times in critical situations. ",
      category: "iot",
      image: "/IOT.jpg",
      link: "src/assets/All IOT.jpg"
    }
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>

      {/* FILTER BUTTONS */}
      <div className="project-filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "web" ? "active" : ""}
          onClick={() => setFilter("web")}
        >
          Web
        </button>

        <button
          className={filter === "java" ? "active" : ""}
          onClick={() => setFilter("java")}
        >
          Java
        </button>

        <button
          className={filter === "iot" ? "active" : ""}
          onClick={() => setFilter("iot")}
        >
         IOT
        </button>
      </div>

      {/* PROJECT GRID */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
            key={project.id}
          >
            <div className="project-card">
              <div className="project-image">
                {project.tag && (
                  <span className="project-tag">{project.tag}</span>
                )}
                <img src={project.image} alt={project.title} />
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
