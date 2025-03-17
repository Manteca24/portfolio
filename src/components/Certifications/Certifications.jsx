import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "../../styles/sections.css";
import Styles from "./Certifications.module.css";
import certifications from "./certifications";

const Certifications = () => {
  const { language } = useLanguage();
  const [hoveredCertification, setHoveredCertification] = useState(null);

  const handleHover = (id) => {
    setHoveredCertification(id);
  };

  const handleMouseLeave = () => {
    setHoveredCertification(null);
  };

  return (
    <section id="certifications" className="sectionBlack">
      <div className="sectionTitle">
        <h2>{language === "en" ? "Certifications" : "Certificaciones"}</h2>
        <div className="line"></div>
      </div>

      <div className={Styles.heroContainer}>
        <div className={Styles.certificationsWrapper}>
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={Styles.certificate}
              onMouseEnter={() => handleHover(cert.id)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={cert.image} target="_blank" rel="noopener noreferrer">
                <img src={cert.image} alt={cert.title} />
              </a>
            </div>
          ))}
        </div>

        {/* List */}
        <div
          className={`${Styles.certificationListWrapper} ${
            hoveredCertification ? Styles.hidden : ""
          }`}
        >
          <ul className={Styles.certificationList}>
            {certifications.map((cert) => (
              <li key={cert.id} className={Styles.certificationItem}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Styles.certificationLink}
                >
                  {language === "en" ? cert.title : cert.titleSpanish}
                  <span className={Styles.tooltip}>
                    {language === "en" ? "More info" : "Saber más"}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Description Panel */}
        <div
          className={`${Styles.descriptionWrapper} ${
            hoveredCertification ? Styles.visible : ""
          }`}
        >
          {hoveredCertification && (
            <div className={Styles.description}>
              <h3>
                {
                  certifications.find(
                    (cert) => cert.id === hoveredCertification
                  )?.[language === "en" ? "title" : "titleSpanish"]
                }
              </h3>
              <p>
                {
                  certifications.find(
                    (cert) => cert.id === hoveredCertification
                  )?.duration[language]
                }
              </p>
              <p>
                {language === "en"
                  ? certifications.find(
                      (cert) => cert.id === hoveredCertification
                    )?.description
                  : certifications.find(
                      (cert) => cert.id === hoveredCertification
                    )?.descriptionSpanish}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
