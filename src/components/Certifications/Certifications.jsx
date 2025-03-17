import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "../../styles/sections.css";
import Styles from "./Certifications.module.css";

const certifications = [
  {
    id: 1,
    title: "Google IT Support Professional Certificate",
    titleSpanish: "Soporte de Tecnologías de la Información de Google",
    image: "/googleTI.jpg",
    duration: {
      en: "200 hours over 6 months",
      es: "200 horas durante 6 meses",
    },
    description:
      "The course covered essential IT skills, including system administration, networking, troubleshooting, and security fundamentals. I gained hands-on experience with Linux and Windows operating systems, as well as learning how to diagnose and resolve common technical issues. This program also provided a strong foundation in cloud computing and customer service, equipping me with the skills to manage IT systems and support users effectively.",
    descriptionSpanish:
      "El curso cubrió habilidades esenciales en TI, incluyendo administración de sistemas, redes, solución de problemas y fundamentos de seguridad. Adquirí experiencia práctica con los sistemas operativos Linux y Windows, además de aprender a diagnosticar y resolver problemas técnicos comunes. Este programa también proporcionó una base sólida en computación en la nube y atención al cliente, equipándome con las habilidades necesarias para gestionar sistemas de TI y brindar soporte a los usuarios de manera efectiva.",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/5W8WYRSXMKA7?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    titleSpanish: "Desarrollador Full Stack",
    image: "/fullstack.jpg",
    duration: {
      en: "600 hours over 6 months",
      es: "600 horas durante 6 meses",
    },
    description:
      "I gained knowledge in web development, both in frontend and backend. The course covered key technologies such as HTML, CSS, JavaScript, React, Node.js, Express, and databases like MongoDB. I learned to build full web applications, from designing the user interface to implementing server-side functionalities. Additionally, I trained in using version control tools like Git and in implementing RESTful APIs. This bootcamp provided me with a solid foundation in modern application development, preparing me to work as a full stack developer.",
    descriptionSpanish:
      "Adquirí conocimientos en desarrollo web tanto en el frontend como en el backend. El curso cubrió tecnologías clave como HTML, CSS, JavaScript, React, Node.js, Express y bases de datos como MongoDB. Aprendí a crear aplicaciones web completas, desde el diseño de la interfaz de usuario hasta la implementación de funcionalidades en el servidor. Además, me entrené en el uso de herramientas de control de versiones como Git y en la implementación de APIs RESTful. Este bootcamp me proporcionó una sólida base en el desarrollo de aplicaciones modernas, preparándome para trabajar como desarrollador full stack.",
    link: "https://formacion.thebridge.tech/es_on_esp_fs/?kw=curso%20desarrollo%20web&cpn=20981412239&utm_medium=ppc&utm_source=adwords&utm_campaign=ADSM_ONLINE_FULL-STACK_GOOGLE_CONV_SEARCH_TestRoas&utm_term=curso%20desarrollo%20web&hsa_kw=curso%20desarrollo%20web&hsa_net=adwords&hsa_ver=3&hsa_cam=20981412239&hsa_ad=693366185505&hsa_acc=1272778203&hsa_src=g&hsa_grp=158338807396&hsa_mt=b&hsa_tgt=kwd-114462654&gad_source=1&gclid=Cj0KCQjwytS-BhCKARIsAMGJyzqG7HbYLgespSbIktdLY8hCrrYe8LvV8k7Jr6EYJHYm2YVe8CDv8OgaAvpbEALw_wcB",
  },
  {
    id: 3,
    title: "SAP ABAP",
    titleSpanish: "SAP ABAP",
    image: "/sapabap.jpg",
    duration: {
      en: "35 hours",
      es: "35 horas",
    },
    description:
      "Introduction to ABAP, the programming language used in SAP systems. I learned how to develop reports, handle data processing, and create interfaces in SAP. The program also focused on understanding the SAP environment, customizing reports, and performing basic modifications. This certification strengthened my programming skills within SAP ERP systems and gave me the ability to write code for automation and data handling within SAP modules.",
    descriptionSpanish:
      "Introducción al ABAP, el lenguaje de programación utilizado en los sistemas SAP. Aprendí a desarrollar informes, manejar el procesamiento de datos y crear interfaces en SAP. El programa también se centró en comprender el entorno SAP, personalizar informes y realizar modificaciones básicas. Esta certificación fortaleció mis habilidades de programación dentro de los sistemas ERP de SAP, dándome la capacidad de escribir código para automatización y manejo de datos dentro de los módulos de SAP.",
    link: "https://academy.logaligroup.com/mod/simplecertificate/view.php?id=2100&action=get",
  },
];

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
              <img src={cert.image} alt={cert.title} />
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
