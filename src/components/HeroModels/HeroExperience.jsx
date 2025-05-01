import { useMediaQuery } from 'react-responsive'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Robocop } from './Robocop_animated'

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-wdith: 1024px)'})
  const isMobile = useMediaQuery({ query: '(max-wdith: 768px)'})

  return (
    <Canvas camera={{position:[0,0,15], fov:45} }>
      <ambientLight intensity={0.2} color='red'/>
      <directionalLight position={[5,5,5]} intensity={3}/>

      <OrbitControls      // no props = unrestricted controls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group
        scale={isMobile? 0.8 : 1.5}
        position={[0, -1.3, 0]}
      >
        <mesh>
          <boxGeometry args={[1,1,1]}/> 
          <meshStandardMaterial color='teal' />
        </mesh>
        <Robocop />
      </group>      
    </Canvas>
  )
}

export default HeroExperience