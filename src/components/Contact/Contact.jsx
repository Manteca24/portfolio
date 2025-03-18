import React, { useState, useEffect } from "react";
import Styles from "./Contact.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import emailjs from "emailjs-com";
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  const { language } = useLanguage();
  const variable_text =
    language === "es"
      ? ["¡Trabajemos juntos!", "¡Tengamos una reunión!", "¡Charlemos!"]
      : ["work together.", "have a meeting.", "chat."];

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Update key whenever language changes to restart animation
    setAnimationKey((prevKey) => prevKey + 1);
  }, [language]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(language === "es" ? "Enviando..." : "Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_USER_ID
      )
      .then(
        () => {
          setStatus(
            language === "es"
              ? "¡Mensaje enviado con éxito!"
              : "Message sent successfully!"
          );
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending message: ", error);
          setStatus(
            language === "es"
              ? "No se pudo enviar el mensaje. Intenta nuevamente."
              : "Failed to send message. Try again."
          );
        }
      );
  };

  return (
    <section id="contact" className={Styles.contact}>
      <div className={Styles.contactContainer}>
        <div className={Styles.contactTitle}>
          <p>{language === "es" ? "Hey," : "Let's"}</p>
          <h2 key={animationKey} className={Styles.animatedText}>
            <TypeAnimation
              sequence={[
                ...variable_text.map((text) => [text, 1000]).flat(),
                "",
                500,
              ]}
              wrapper="h2"
              speed={20}
              repeat={Infinity}
            />
          </h2>
        </div>
        <div className={Styles.lineContainer}>
          <img src="/line.png" alt="Line" className={Styles.line} />
        </div>
        <form onSubmit={handleSubmit} className={Styles.contactForm}>
          <div className={Styles.inputGroup}>
            <label className={Styles.label}>
              {language === "es" ? "Nombre" : "Name"}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={Styles.inputGroup}>
            <label className={Styles.label}>
              {language === "es" ? "Correo electrónico" : "Email"}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={Styles.inputGroup}>
            <label className={Styles.label}>
              {language === "es" ? "Mensaje" : "Message"}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className={Styles.button}
            disabled={status === "Sending..." || status === "Enviando..."}
          >
            {status === "Sending..." || status === "Enviando..."
              ? language === "es"
                ? "Enviando..."
                : "Sending..."
              : language === "es"
              ? "Enviar"
              : "Send"}
          </button>
          {status && <p className={Styles.status}>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
