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
        <a href={liveDemo} target="_blank" rel="noopener noreferrer">
          {image && (
            <img src={image} alt={title} className={Styles.projectImage} />
          )}
        </a>
      </div>
      <div className={Styles.rightSide}>
        <div className={Styles.projectInfo}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className={Styles.projectTechnologies}>
          {technologies && technologies.length > 0 && (
            <div className={Styles.technologies}>
              {technologies.map((tec, index) => (
                <div key={index} className={Styles.technology}>
                  <img
                    src={tec.image}
                    alt={tec.name}
                    title={tec.name} // Tooltip on hover
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={Styles.iconos}>
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.demoLink}
            >
              <img src="/descarga.png" alt="descarga" />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.githubLink}
            >
              <img src="/github.png" alt="github" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
