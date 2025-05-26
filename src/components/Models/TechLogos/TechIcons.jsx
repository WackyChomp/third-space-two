import React, { useEffect } from 'react'
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three'

const TechIcons = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if(model.name == '3rd Dimension'){
      scene.scene.traverse((child) => {
        if(child.isMesh && child.name == 'Object_5'){
          child.material = new THREE.MeshStandardMaterial({ color: 'white'})
        }
      })
    }
  })

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5,5,5]} intensity={1} />
      <Environment preset='city' />

      <OrbitControls enableZoom={false} />

      <Float speed={6} rotationIntensity={0.5} floatIntensity={0.8}>
        <group scale={model.scale} rotation={model.rotation} >       {/* model prop */}
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcons