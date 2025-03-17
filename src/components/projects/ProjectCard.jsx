import React from "react";
import Styles from "./Projects.module.css";

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  liveDemo,
  github,
}) => {
  return (
    <div className={Styles.projectCard}>
      <div className={Styles.LeftSide}>
        {image && (
          <img src={image} alt={title} className={Styles.projectImage} />
        )}
      </div>
      <div className={Styles.RightSide}>
        <h3>{title}</h3>
        <p>{description}</p>

        {technologies && technologies.length > 0 && (
          <div className={Styles.technologies}>
            <p>
              <strong>Technologies:</strong> {technologies.join(", ")}
            </p>
          </div>
        )}

        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.demoLink}
          >
            Live Demo
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.githubLink}
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
