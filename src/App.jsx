import { useState } from "react";
import "./App.css";
import React from "react";
import CastleIn2D from "./components/Castle/CastleIn2D.jsx";
import SparklingLights from "./components/SparklingLights/SparklingLights.jsx";
import Curtain from "./components/Curtain/CurtainCopy.jsx";

function App() {
  const [count, setCount] = useState(0);

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
        <CastleIn2D />
        <SparklingLights />
        <Curtain />
      </div>
    </>
  );
}

export default App;
