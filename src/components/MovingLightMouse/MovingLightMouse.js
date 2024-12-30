import React, { useEffect, useRef } from "react";

export default function MovingLightMouse() {

    const lightRef = useRef(null);

  const handleMouseMove = (event) => {
    if (lightRef.current) {
      lightRef.current.style.left = `${event.clientX}px`;
      lightRef.current.style.top = `${event.clientY}px`;
    }
  };

  useEffect(() => {
    const light = document.createElement("div");
    light.className = "mouse-light";
    document.body.appendChild(light);
    lightRef.current = light;

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      light.remove();
    };
  }, []);

  return null; // This component does not render any additional JSX
}