import { useState } from "react";
import "./App.css";
import React from "react";
import CastleIn2D from "./components/Castle/CastleIn2D.jsx";
import SparklingLights from "./components/SparklingLights/SparklingLights.jsx";
import Curtain from "./components/Curtain/CurtainCopy.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  console.log("In parent: "+zoomLevel);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <CastleIn2D count={count} zoomLevel={zoomLevel}/>
        <SparklingLights />
        <Curtain count={count} setCount={setCount} zoomLevel={zoomLevel} setZoomLevel={setZoomLevel}/>
      </div>
    </>
  );
}

export default App;
