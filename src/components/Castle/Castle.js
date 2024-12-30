import React from 'react';


const Castle = () => {
  return (
    <>
    {/* Main Castle Body */}
    <mesh position={[0, 1.5, 0]}>
      <boxGeometry args={[4, 3, 4]} />
      <meshStandardMaterial color="lightpink" />
    </mesh>

    {/* Towers */}
    <mesh position={[-3, 3, 0]}>
      <cylinderGeometry args={[0.8, 0.8, 3, 32]} />
      <meshStandardMaterial color="lightgrey" />
    </mesh>
    <mesh position={[3, 3, 0]}>
      <cylinderGeometry args={[0.8, 0.8, 3, 32]} />
      <meshStandardMaterial color="lightgrey" />
    </mesh>

    {/* Roofs */}
    <mesh position={[-3, 5.5, 0]}>
      <coneGeometry args={[1, 2, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
    <mesh position={[3, 5.5, 0]}>
      <coneGeometry args={[1, 2, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>

    {/* Entrance */}
    <mesh position={[0, 1, 2.01]}>
      <boxGeometry args={[1, 1, 0.01]} />
      <meshStandardMaterial color="brown" />
    </mesh>
  </>
  );
};

export default Castle;