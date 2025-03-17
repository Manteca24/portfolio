import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import styles from "./Home.module.css";
import AboutMe from "../AboutMe/AboutMe";

const Home = () => {
  const { language } = useLanguage();
  const [profileImage, setProfileImage] = useState("/profileB&W.jpg");

  const handleMouseEnter = () => {
    setProfileImage("/profile.jpg");
  };

  const handleMouseLeave = () => {
    setProfileImage("/profileB&W.jpg");
  };

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.home}>
      <img
        src={profileImage}
        alt="Agostina Zavia Martinez"
        className={styles.profilePic}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <div className={styles.content}>
        <h2 className={styles.greeting}>
          {language === "en" ? "Hi, there! I'm" : "¡Hola! Soy"}
        </h2>
        <h1 className={styles.name}>AGOSTINA ZAVIA MARTINEZ</h1>
        <h3 className={styles.subtitle}>
          {language === "en"
            ? "Full Stack Developer"
            : "Desarrolladora Full Stack"}
        </h3>
      </div>

      {/* Arrow to indicate scroll */}
      <img
        src="/down.svg"
        alt="Scroll down"
        className={styles.arrow}
        onClick={scrollToAboutMe} // Call the function to scroll down
      />
    </section>
  );
};

export default Home;
