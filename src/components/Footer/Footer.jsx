import React from "react";
import Styles from "./Footer.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className={Styles.footer}>
      {language === "es" ? (
        <p>Hecho con ❤️ y ☕ por Agostina Zavia</p>
      ) : (
        <p>Made with ❤️ and ☕ by Agostina Zavia</p>
      )}
      <div className={Styles.CamilayAnnie}>
        {language === "es" ? (
          <>
            <p>
              Logo de{" "}
              <a
                href="https://www.linkedin.com/in/camila-zavia-mart%C3%ADnez-9a820b254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Camila Zavia
              </a>
            </p>
            {" | "}
            <p>
              Foto de perfil por{" "}
              <a
                href="https://www.instagram.com/ph.anaharo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ana Haro
              </a>
            </p>
          </>
        ) : (
          <>
            <p>
              Logo by{" "}
              <a
                href="https://www.linkedin.com/in/camila-zavia-mart%C3%ADnez-9a820b254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Camila Zavia
              </a>
            </p>
            {" | "}
            <p>
              Profile picture by{" "}
              <a
                href="https://www.instagram.com/ph.anaharo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ana Haro
              </a>
            </p>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
