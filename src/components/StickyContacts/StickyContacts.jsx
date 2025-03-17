import React, { useState } from "react";
import styles from "./StickyContacts.module.css";

const StickyContacts = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("agozavia@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
  };

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.left}>
        <a
          href="mailto:agozavia@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/mail.png" alt="Mail" className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/agozavia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.png" alt="LinkedIn" className={styles.icon} />
        </a>
        <a
          href="https://github.com/manteca24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" alt="GitHub" className={styles.icon} />
        </a>
        <div className={styles.verticalLine}></div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <span className={styles.email} onClick={handleCopyEmail}>
          ago@zavia.es
        </span>
        {copied && <span className={styles.copiedMessage}>Copied!</span>}
        <div className={styles.verticalLine}></div>
      </div>
    </div>
  );
};

export default StickyContacts;
