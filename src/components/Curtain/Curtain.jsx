import React from "react";

export default function Curtain() {
  return (
    <>
      {" "}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust the opacity as needed
          pointerEvents: "none", // Ensure clicks pass through
        }}
      />
    </>
  );
}
