import React, { useContext } from "react";
import Styles from "./Technologies.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import "../../styles/sections.css";
import technologies from "./technologies.js";

const Technologies = () => {
  const { language } = useLanguage();

  // Grouping technologies by category
  const groupedTechnologies = technologies.reduce(
    (acc, { category, ...rest }) => {
      if (!acc[category]) acc[category] = [];
      acc[category].push(rest);
      return acc;
    },
    {}
  );

  return (
    <section id="technologies" className="section">
      <div className="sectionTitle">
        <h2>{language === "en" ? "Technologies" : "Tecnologías"}</h2>
        <div className="line"></div>
      </div>

      <div className={Styles.technologiesContainer}>
        {Object.entries(groupedTechnologies).map(([category, techs]) => (
          <div key={category} className={Styles.categoryGroup}>
            <h3 className={Styles.categoryTitle}>{category}</h3>
            <div className={Styles.technologiesList}>
              {techs.map(({ name, icon }, index) => (
                <div key={index} className={Styles.technologieItem}>
                  <img
                    src={icon}
                    alt={name}
                    className={Styles.technologieIcon}
                  />
                  <p>{name}</p>
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
