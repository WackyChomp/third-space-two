import React from 'react'

const HeroLights = () => {
  return (
    <>
      {/* 
      <ambientLight intensity={0.2} color='red'/>
      <directionalLight position={[5,5,5]} intensity={3}/>
      */}
      <spotLight 
        position={[2,5,6]}
        intensity={100}
        angle={0.15}
        penubra={0.2}
        color='red'
      />
      <spotLight 
        position={[4,5,4]}
        intensity={100}
        angle={0.3}
        penubra={0.2}
        color='green'
      />
    </>
  )
}

export default HeroLights