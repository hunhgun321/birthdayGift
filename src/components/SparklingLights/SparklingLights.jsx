import React from "react";
import "./SparklingLights.css";
import { createElement, useEffect, useRef } from "react";
export default function SparklingLights() {

  const mainDiv = useRef(null);

  const createMovingLight = () => {
    const size = Math.random() * 20 + 10; // Size between 10px and 30px

    // Randomize the movement direction by altering the animation
    const moveX = Math.random() * 400 - 200; // Random X movement
    const moveY = Math.random() * -400; // Random upward movement

    // Create the light element using document.createElement
    let light = document.createElement("div");
    light.className = "sparkling-light";
    light.style.width = `${size}px`;
    light.style.height = `${size}px`;
    light.style.top = `${Math.random() * 100}vh`;
    light.style.left = `${Math.random() * 100}vw`;
    light.style.animation = `moveAndFade 3s forwards`;
    light.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // Append the light element to the mainDiv
    mainDiv.current.appendChild(light);

    // Create trails
    for (let i = 0; i < 5; i++) {
      const trail = document.createElement("div");
      trail.className = "trail";
      trail.style.width = `${size / 2}px`; // Smaller size for the trail
      trail.style.height = `${size / 2}px`;
      trail.style.top = `${Math.random() * 100}vh`;
      trail.style.left = `${Math.random() * 100}vw`;
      trail.style.animationDelay = `${i * 0.1}s`; // Stagger the trail
      mainDiv.current.appendChild(trail);
    }

    // Remove the lights and trails after the animation finishes
    setTimeout(() => {
      light.remove();
      const trails = document.querySelectorAll(".trail");
      trails.forEach((trail) => trail.remove());
    }, 3000); // Match the duration of the animation
  };

  useEffect(() => {
    // Create sparkling lights at intervals
    const intervalId = setInterval(createMovingLight, 200); // Create a new light every 500ms // 改第二個para 改lights有幾密
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return <div id="sparkling-lights-bg" ref={mainDiv} style={{position: 'absolute'}}></div>;
}
