import React, { useContext } from "react";
import Styles from "./Technologies.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import "../../styles/sections.css";
import technologies from "./technologies.js";

const Technologies = () => {
  const { language } = useLanguage();

  // Grouping technologies by category
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <section id="technologies" className="section">
      <div className="sectionTitle">
        <h2>{language === "en" ? "Technologies" : "Tecnologías"}</h2>
        <div className="line"></div>
      </div>

      <div className={Styles.technologiesContainer}>
        {Object.keys(groupedTechnologies).map((category) => (
          <div key={category} className={Styles.categoryGroup}>
            <h3 className={Styles.categoryTitle}>{category}</h3>
            <div className={Styles.technologiesList}>
              {groupedTechnologies[category].map((tech, index) => (
                <div key={index} className={Styles.technologieItem}>
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={Styles.technologieIcon}
                  />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
