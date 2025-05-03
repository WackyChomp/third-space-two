import React from 'react'

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
      <spotLight 
        position={[-10,5,5]}
        intensity={100}
        angle={0.3}
        penubra={0.2}
        color='blue'
      />
    </>
  )
}

export default HeroLights