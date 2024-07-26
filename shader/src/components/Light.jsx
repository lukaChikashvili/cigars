import React from 'react'

const Light = () => {
  return (
<>
<ambientLight intensity={1} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 10, -5]} intensity={1.5} />
</>
  )
}

export default Light
