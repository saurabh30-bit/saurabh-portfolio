"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

function WireframeGeometry() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1;
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Icosahedron */}
      <mesh>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshBasicMaterial color="#000000" wireframe wireframeLinewidth={1} transparent opacity={0.3} />
      </mesh>
      
      {/* Inner Octahedron */}
      <mesh>
        <octahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color="#000000" wireframe wireframeLinewidth={1.5} />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <WireframeGeometry />
      </Canvas>
    </div>
  );
}
