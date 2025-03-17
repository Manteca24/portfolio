import { useLanguage } from "../../contexts/LanguageContext";
import { useState, useRef, useEffect } from "react"; // Use useRef and useEffect
import styles from "./LanguageSwitcher.module.css"; // Import CSS for flag styles

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false); // Manage the dropdown visibility
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    if (lang !== language) {
      toggleLanguage(lang);
      setIsOpen(false); // Close the dropdown after selecting a language
    }
  };

  return (
    <div className={styles.languageSwitcher}>
      <div className={styles.dropdownContainer} ref={dropdownRef}>
        {/* Show the selected language flag */}
        <div className={styles.selectedFlag} onClick={toggleDropdown}>
          <img
            src={language === "en" ? "/uk-flag.png" : "/spain-flag.png"}
            alt={language === "en" ? "English" : "Español"}
            className={styles.flag}
          />
          <img src="/down.svg" className={styles.arrow} />
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div className={styles.dropdown}>
            <div
              className={styles.languageOption}
              onClick={() => handleLanguageChange("en")}
            >
              <img src="/uk-flag.png" alt="English" className={styles.flag} />
              <span>English</span>
            </div>
            <div
              className={styles.languageOption}
              onClick={() => handleLanguageChange("es")}
            >
              <img
                src="/spain-flag.png"
                alt="Español"
                className={styles.flag}
              />
              <span>Español</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
