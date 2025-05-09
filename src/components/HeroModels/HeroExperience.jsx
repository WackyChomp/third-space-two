import { useMediaQuery } from 'react-responsive'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Robocop } from './Robocop_animated'
import HeroLights from './HeroLights'
import { PFFRoom } from './Pff_room'
import Particles from './Particles'

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-wdith: 1024px)'})
  const isMobile = useMediaQuery({ query: '(max-wdith: 768px)'})

  return (
    <Canvas camera={{position:[0,0,15], fov:45} }>

      {/* <HeroLights /> */}

      <OrbitControls      // no props = unrestricted controls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />

      <Particles count={100} />


      {/* ------------------ group 1 ------------------ */}
      <group
        scale={isMobile? 0.8 : 1}
        position={[0, -1, 0]}
      >
        {/* <mesh>
          <boxGeometry args={[1,1,1]}/> 
          <meshStandardMaterial color='teal' />
        </mesh> */}

        <mesh 
          position={[0, 2.5, 0]}
          scale={2}
        >
          <sphereGeometry args={[0.5]}/>
          <meshStandardMaterial color='white' />
        </mesh>

        <Robocop />

        <mesh 
          rotation={[Math.PI / -2, 0, 0]} 
          position={[0,-1.5,0]}
          scale={5}
        >
          <planeGeometry/>
          <meshStandardMaterial color='white' />
        </mesh>


        {/* <PFFRoom /> */}
      </group>

      {/* ------------------ group 2 ------------------ */}
      <group
        scale={isMobile? 0.8 : 1.3}      // scale={isMobile? 0.8 : 1}
        position={[1.2, -2.47, 0]}       // position={[0, -1, 0]}
      >
        <PFFRoom />
      </group>


    </Canvas>
  )
}

export default HeroExperience