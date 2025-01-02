import React, { useEffect, useState } from "react";
import "./Curtain.css";

export default function Curtain({count, setCount, zoomLevel, setZoomLevel}) {
  // You can customize the intensity of the blur filter and light radius
  const filterIntensity = "100";
  // const lightRadius = 250;
  const expandedRadius = 350; // 擴大的半徑
  // const flashlightOffset = lightRadius / 2;

  const [currentRadius, setCurrentRadius] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ doorX: 0, doorY: 0 });

  useEffect(() => {
    (async () => {
      //Put your logic here
      const flashlight = document.getElementById("flashlight");
      const container = document.getElementById("curtain-container");
      const illuminatedItem = document.getElementById(
        "curtain-illuminated-item"
      );      
      const blurFilter = document.querySelector("#blur-filter feGaussianBlur");

      const { left, top, width, height } =
          illuminatedItem.getBoundingClientRect();

      const lightRadius = width * 0.1;
      setCurrentRadius(lightRadius);
      const flashlightOffset = lightRadius / 2;

      blurFilter.setAttribute("stdDeviation", filterIntensity);
      flashlight.style.width = flashlight.style.height = `${lightRadius}px`;

      const followMouseFlashlight = ({ clientX, clientY }) => {
        

        // 設定中心範圍的邊界
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const rangeSize = lightRadius * 3; // 400x400 的範圍

        // 計算光的位置
        let flashlightX = clientX - flashlightOffset;
        let flashlightY = clientY - flashlightOffset;

        // 限制光的範圍在畫面中心
        flashlightX = Math.max(
          centerX - rangeSize / 2,
          Math.min(flashlightX, centerX + rangeSize / 2 - lightRadius)
        );
        // flashlightY = Math.max(
        //   centerY - rangeSize / 2,
        //   Math.min(flashlightY, centerY + rangeSize / 2 - lightRadius)
        // );

        flashlight.style.left = `${flashlightX}px`;
        flashlight.style.top = `${flashlightY}px`;
      };

      // const handleClick = () => {
      //   // 擴大光的範圍
      //   setCurrentRadius(expandedRadius);
      //   setTimeout(() => {
      //     // 縮回原來的大小
      //     setCurrentRadius(lightRadius);
      //   }, 300); // 與 CSS 過渡時間相同
      // };

      const handleClick = () => {
        const { left, top, width, height } = container.getBoundingClientRect();

        setIsExpanded(true);
        flashlight.style.transform = "scale(1.4)"; // 擴大 40%
        // flashlight.style.transformOrigin = `${doorX}px ${doorY}px`; // 設置放大中心

        setCount(count + 1);
        setZoomLevel(zoomLevel + 1);

        setTimeout(() => {
          setIsExpanded(false);

          flashlight.style.transform = "scale(1)"; // 恢復原大小
        }, 500); // 與 CSS 過渡時間相同
      };

      flashlight.style.width = flashlight.style.height = `${currentRadius}px`;

      container.addEventListener("mousemove", followMouseFlashlight);
      container.addEventListener("click", handleClick);
    })();
  }, [currentRadius]);

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
