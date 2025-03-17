import React, { useState, useEffect } from "react";
import Styles from "./AboutMe.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import "../../styles/sections.css";

const AboutMe = () => {
  const [profileImage, setProfileImage] = useState("/profile.jpg");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { language } = useLanguage();

  const hoverImages = [
    "/fotoHover1.png",
    "/fotoHover2.png",
    "/fotoHover3.jpeg",
    "/fotoHover4.jpeg",
    "/fotoHover5.jpeg",
    "/fotoHover6.jpeg",
    "/fotoHover7.jpg",
    "/fotoHover8.JPG",
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleHoverOrClick = () => {
    const nextIndex = (currentIndex + 1) % hoverImages.length;
    setProfileImage(hoverImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handleReset = () => {
    setProfileImage("/profile.jpg");
  };

  return (
    <section id="about" className="section">
      <div className="sectionTitle">
        <h2>{language === "en" ? "About Me" : "Sobre mí"}</h2>
        <div className="line"></div>
      </div>
      <div className={Styles.content}>
        {language === "en" ? (
          <article className={Styles.textContainer}>
            <p>
              Passionate about science since childhood, I first trained as a
              biologist, where I developed a strong analytical mindset. My
              interest in programming started when I worked with the R language
              on an Agent-Based Model (ABM) project.
            </p>
            <p>
              That experience sparked my curiosity about software development,
              leading me to complete a Full Stack Developer bootcamp, where I
              discovered my love for backend development.
            </p>
            <p>
              With 7 years of experience at McDonald's, including roles as a
              trainer and team leader, I developed leadership, teamwork,
              adaptability, and problem-solving skills in high-pressure
              environments. Additionally, working as a private teacher
              strengthened my ability to communicate complex ideas clearly,
              mentor others, and adapt to different learning styles.
            </p>
            <p>
              Beyond tech, I am an adventurer at heart. I spent months traveling
              as a backpacker through Thailand and Morocco, embracing different
              cultures, overcoming challenges, and learning to adapt quickly—a
              mindset I bring to my work.
            </p>
            <p>
              Now, I am eager to build impactful projects, solve complex
              problems, and continue growing as a full-stack developer. 🚀
            </p>
          </article>
        ) : (
          <article className={Styles.textContainer}>
            <p>
              Apasionada por la ciencia desde niña, me formé como bióloga, lo
              que me dio una gran capacidad analítica. Mi interés por la
              programación surgió al trabajar con el lenguaje R en un proyecto
              de Modelos Basados en Agentes (ABM).
            </p>
            <p>
              A raíz de esa experiencia, decidí especializarme en desarrollo de
              software, completando un bootcamp de Full Stack Developer, donde
              descubrí mi pasión por el backend.
            </p>
            <p>
              Durante 7 años en McDonald's, incluyendo roles como formadora y
              jefa de equipo, desarrollé habilidades clave como liderazgo,
              trabajo en equipo, resolución de problemas y adaptación en
              entornos de alta presión. Además, mi experiencia como profesora
              particular me enseñó a comunicar ideas complejas de manera clara,
              guiar a otros y adaptarme a diferentes estilos de aprendizaje.
            </p>
            <p>
              Más allá de la tecnología, soy una persona aventurera y curiosa.
              He pasado meses viajando como mochilera por Tailandia y Marruecos,
              sumergiéndome en distintas culturas y aprendiendo a enfrentar
              desafíos con creatividad y flexibilidad.
            </p>
            <p>
              Ahora, busco desarrollar proyectos impactantes, resolver problemas
              complejos y seguir creciendo como full-stack developer. 🚀
            </p>
          </article>
        )}
        <div className={Styles.imageContainer}>
          <img src="/pointing.gif" alt="pointingGif" className={Styles.arrow} />
          <img
            src={profileImage}
            alt="Profile"
            className={Styles.profileImage}
            onMouseEnter={!isMobile ? handleHoverOrClick : null}
            onMouseLeave={!isMobile ? handleReset : null}
            onClick={isMobile ? handleHoverOrClick : null}
          />
        </div>
        <p className={Styles.infoText}>
          {language === "en"
            ? "Click to know me more"
            : "Haz click para conocer más sobre mí"}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
