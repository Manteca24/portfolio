import React, { useRef, useState, useEffect } from "react";
import useOnScreen from "../hooks/useOnScreen"; // adjust the path accordingly
import "../styles/sections.css";

const AnimateWrapper = ({ children, animationClass = "slide-up" }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref, "-100px"); // triggers slightly before element is fully in view
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <div
      ref={ref}
      className={`animate-item ${hasAnimated ? animationClass : ""}`}
    >
      {children}
    </div>
  );
};

export default AnimateWrapper;
