import React, { useState, useEffect } from "react";
import Styles from "./NavBar.module.css"; // Ensure the path is correct
import LanguageSwitcher from "../ToggleButtons/LanguageSwitcher";
import { useLanguage } from "../../contexts/LanguageContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the sidebar visibility
  const [showProfile, setShowProfile] = useState(false); // State to show profile div
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowProfile(true);
      } else {
        setShowProfile(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  // Determine the correct CV file based on the language
  const cvFile =
    language === "es"
      ? "/es_ZAVIA_MARTINEZ_MARÍA_AGOSTINA_CV_2025.pdf"
      : "/en_ZAVIA_MARTINEZ_MARÍA_AGOSTINA_CV_2025.pdf"; // Default to English if not Spanish

  // Tooltip text based on language
  const tooltipText = language === "es" ? "Descargar CV" : "Download CV";

  return (
    <header>
      <div className={Styles.navBar}>
        {/* Profile Section (Appears after scrolling down) */}
        <div className={`${Styles.profile} ${showProfile ? Styles.show : ""}`}>
          <a href="#home">
            <img
              src="/favicon2.png"
              alt="Agostina Zavia Martínez"
              className={Styles.profilePic}
            />
          </a>
          <span className={Styles.profileName}>Agostina Zavia Martínez</span>
        </div>

        {/* Hamburger Icon */}
        <div className={Styles.hamburger} onClick={toggleMenu}>
          <div className={`${Styles.bar} ${isOpen ? Styles.open : ""}`}></div>
          <div className={`${Styles.bar} ${isOpen ? Styles.open : ""}`}></div>
          <div className={`${Styles.bar} ${isOpen ? Styles.open : ""}`}></div>
        </div>

        {/* Navigation Links */}
        <nav className={`${Styles.nav} ${isOpen ? Styles.openNav : ""}`}>
          <ul>
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  closeMenu();
                }}
              >
                {language === "en" ? "Home" : "Inicio"}
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                {language === "en" ? "About Me" : "Sobre mí"}
              </a>
            </li>
            <li>
              <a href="#certifications" onClick={closeMenu}>
                {language === "en" ? "Certifications" : "Certificaciones"}
              </a>
            </li>
            <li>
              <a href="#technologies" onClick={closeMenu}>
                {language === "en" ? "Technologies" : "Tecnologías"}
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                {language === "en" ? "Projects" : "Proyectos"}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                {language === "en" ? "Contact" : "Contacto"}
              </a>
            </li>
            <li>
              <a href={cvFile} download className={Styles.downloadLink}>
                <img
                  src="/download.svg"
                  alt="Download CV"
                  className={Styles.downloadIcon}
                />
                <span className={Styles.tooltip}>{tooltipText}</span>
              </a>
            </li>
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default NavBar;
