import React, { useState, useEffect } from "react";
import styles from "./RippleEffect.module.css";

const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleMouseClick = (event) => {
      const ripple = {
        x: event.clientX,
        y: event.clientY,
        id: Date.now(),
      };

      setRipples((prevRipples) => [...prevRipples, ripple]);

      // Remove ripple after animation ends (1 second)
      setTimeout(() => {
        setRipples((prevRipples) =>
          prevRipples.filter((r) => r.id !== ripple.id)
        );
      }, 1000);
    };

    window.addEventListener("click", handleMouseClick);

    return () => window.removeEventListener("click", handleMouseClick);
  }, []);

  return (
    <div>
      <div className={styles.rippleContainer}>
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className={styles.ripple}
            style={{
              left: `${ripple.x - 50}px`, // Position ripple at cursor X
              top: `${ripple.y - 50}px`, // Position ripple at cursor Y
              width: "100px", // Starting size of the ripple
              height: "100px", // Starting size of the ripple
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RippleEffect;
