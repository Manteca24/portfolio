import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Technologies from "./components/Technologies/Technologies.jsx";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact/Contact";
import StickyContacts from "./components/StickyContacts/StickyContacts";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Certifications from "./components/Certifications/Certifications";
import AnimateWrapper from "./components/AnimateWrapper";
import "./App.css";
import "./styles/sections.css";

const App = () => {
  const [language, setLanguage] = useState("en");
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50); // Small delay to ensure DOM is ready
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2000) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <div>
      <NavBar language={language} toggleLanguage={toggleLanguage} />
      <main>
        <Home />
        <AnimateWrapper animationClass="slide-up">
          <AboutMe />
        </AnimateWrapper>
        <AnimateWrapper animationClass="slide-up">
          <Certifications />
        </AnimateWrapper>
        <AnimateWrapper animationClass="slide-up">
          <Technologies />
        </AnimateWrapper>
        <AnimateWrapper animationClass="slide-up">
          <Projects />
        </AnimateWrapper>
        <AnimateWrapper animationClass="slide-up">
          <Contact />
        </AnimateWrapper>
        <StickyContacts />
      </main>
      <Footer />

      {/* Scroll-to-Top Button with Custom Image */}
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <img
            src="/upArrow.png"
            alt="Scroll to top"
            className="scroll-to-top-img"
          />
        </button>
      )}
    </div>
  );
};

export default App;
