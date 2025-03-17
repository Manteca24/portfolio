//este me gustó para los proyectos

import React, { useState } from "react";
import styles from "./Hover3DEffect.module.css";

const Hover3DEffect = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = e.target;
    const { offsetLeft, offsetTop, clientWidth, clientHeight } = element;

    // Calculate the center position of the element
    const centerX = offsetLeft + clientWidth / 2;
    const centerY = offsetTop + clientHeight / 2;

    // Calculate the mouse position relative to the center of the element
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Calculate the tilt effect based on the mouse's position
    const tiltX = (deltaY / clientHeight) * 20; // Max tilt: 20deg
    const tiltY = (deltaX / clientWidth) * -20; // Max tilt: 20deg

    // Update the tilt state with the new values
    setTilt({ x: tiltX, y: tiltY });
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.element}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        onMouseMove={handleMouseMove}
      ></div>
    </div>
  );
};

export default Hover3DEffect;
