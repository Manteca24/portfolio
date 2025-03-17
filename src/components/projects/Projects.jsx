import React from "react";
import ProjectCard from "./ProjectCard";
import Styles from "./Projects.module.css";
import projects from "./projectsData";
import { useLanguage } from "../../contexts/LanguageContext";
import "../../styles/sections.css";

const Projects = () => {
  const { language } = useLanguage();

  return (
    <section id="projects" className="sectionBlack">
      <div className="sectionTitle">
        <h2>{language === "en" ? "Projects" : "Proyectos"}</h2>
        <div className="line"></div>
      </div>
      <div className={Styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description[language]}
            technologies={project.technologies}
            image={project.image}
            liveDemo={project.liveDemo}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
