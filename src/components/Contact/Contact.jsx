import React, { useState } from "react";
import Styles from "./Contact.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent!");
  };

  return (
    <section id="contact" className={Styles.contact}>
      <h2>{language === "en" ? "Contact" : "Contacto"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
