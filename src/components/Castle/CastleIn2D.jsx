import { contain, cover } from "three/src/extras/TextureUtils.js";
// const castleImage = require("/disneyland_castle.jpeg");

import { useEffect, useState } from "react";
import "./CastleCss.css";
import React from "react";

export default function CastleIn2D({count,zoomLevel}) {
  const [sparkle, setSparkle] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const [zoomScale, setZoomScale] = useState(1);

  const [doorX, setDoorX] = useState(0);
  const [doorY, setDoorY] = useState(0);

  // useEffect(() => {
  //   const { left, top, width, height } = document.getElementById("castle-in-2d").getBoundingClientRect();
  
  //   setDoorX(left + width / 2);
  //   setDoorY(top + height * 0.75);
  // }, []);

  useEffect(() => {
    const sparkleInterval = setInterval(() => {
      setSparkle(!sparkle);
    }, 2000);

    const timer = setTimeout(() => {
      setFadeIn(true); // 設定為淡入狀態
    }, 1000);

    return () => {
      clearInterval(sparkleInterval);
      clearTimeout(timer);
    };
  }, [sparkle]);

  useEffect(() => {
    console.log("Triggered with zoom level:", zoomLevel);
    setZoomScale(zoomLevel);

  }, [zoomLevel]);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <img
        id="castle-in-2d"
        src="/disneyland_castle_png_best.png"
        className={`  ${fadeIn ? "fade-in" : ""}`}
        style={{
          objectFit: "contain",
          overflow: "hidden",
          filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))",
          width: "100vw",
          height: "100vh",
          // transform: `scale(${zoomScale})`,
          // transformOrigin: `${doorX}% ${doorY}%`,
          // transition: 'transform 0.3s ease',
        }} // This maintains aspect ratio
        alt="Disneyland Castle"
      />
    </div>
  );
}
