import React, { useEffect } from "react";
import "./Curtain.css";

export default function Curtain() {

  // You can customize the intensity of the blur filter and light radius 
const filterIntensity = "100";
const lightRadius = 500;

const flashlightOffset = lightRadius / 2;


  useEffect(() => {

    (async () => {

      //Put your logic here
      const flashlight = document.getElementById("flashlight");
    const container = document.getElementById("curtain-container");
    const illuminatedItem = document.getElementById("curtain-illuminated-item");
    const blurFilter = document.querySelector("#blur-filter feGaussianBlur");
    
    blurFilter.setAttribute('stdDeviation', filterIntensity);
    flashlight.style.width = flashlight.style.height = `${lightRadius}px`;

    const followMouseFlashlight = ({ clientX, clientY }) => {
      const { left, top } = illuminatedItem.getBoundingClientRect();
      flashlight.style.left = `${clientX - left - flashlightOffset}px`;
      flashlight.style.top = `${clientY - top - flashlightOffset}px`;
    };

    container.addEventListener('mousemove', followMouseFlashlight);
    })();
    

    
  }, []);

  return (
    <>
      <section id="curtain-container">
        <article id="curtain-illuminated-item">
          {" "}
          <span className="flashlight" id="flashlight"></span>
          <svg>
            <defs>
              <filter id="blur-filter">
                <feGaussianBlur />
              </filter>
            </defs>
          </svg>{" "}
        </article>
      </section>
    </>
  );
}
