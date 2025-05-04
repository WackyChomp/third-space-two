import React from 'react'
import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
      {/* 
        spotLight not visible on the room model
      */}

      {/* 
      <ambientLight intensity={0.2} color='red'/>
      <directionalLight position={[5,5,5]} intensity={3}/>
      */}
      <spotLight 
        position={[2,5,6]}
        intensity={100}
        angle={0.15}
        penumbra={0.2}          // smooth out the noticeable circles
        color='red'
      />
      <spotLight 
        position={[4,5,4]}
        intensity={100}
        angle={0.3}
        penumbra={0.2}
        color='green'
      />
      <spotLight 
        position={[-10,5,5]}
        intensity={100}
        angle={0.3}
        penumbra={0.2}
        color='blue'
      />

      {/* 
      <primitive 
      object={new THREE.RectAreaLight('#A259FF')}     // #A259FF - light purple color
      position={[1,3,4]}
      intensity={15}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      <pointLight 
        position={[0,1,0]}
        intensity={10}
        color='#7209b7'
      />

      <pointLight 
        position={[1,2,-2]}
        intensity={10}
        color='#0d00a4'
      /> 
      */}
    </>
  )
}

export default HeroLights