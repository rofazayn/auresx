import React from 'react'
import { OrbitControls, CameraShake } from '@react-three/drei'
import { useControls } from 'leva'
import { Particles } from './particles'
import { Canvas, extend, events } from '@react-three/fiber'
import * as THREE from 'three'

extend(THREE)

const ThreeScene = () => {
  const props = {
    focus: 5.1,
    speed: 50,
    aperture: 1.8,
    fov: 300,
    curl: 0.2,
  }
  return (
    <Canvas
      events={events}
      style={{
        width: '100%',
        height: '100%',
      }}
      camera={{ fov: 25, position: [0, 0, 6], zoom: 1.1 }}
    >
      {/* <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.5}
        zoomSpeed={0.1}
      /> */}
      <CameraShake
        yawFrequency={1}
        maxYaw={0.05}
        pitchFrequency={1}
        maxPitch={0.05}
        rollFrequency={0.5}
        maxRoll={0.5}
        intensity={0.2}
      />
      <Particles {...props} />
    </Canvas>
  )
}

export default ThreeScene
