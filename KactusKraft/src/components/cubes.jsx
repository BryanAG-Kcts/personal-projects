import { useBox } from '@react-three/cannon'
import { useState } from 'react'
import * as THREE from 'three'

const colorTransparent = new THREE.Color('#CBE6C8')

export const Cubes = ({ boxesGame, removeCube, addCube }) => {
  return boxesGame.map(cube => <Cube key={cube.id} position={cube.position} texture={cube.texture} removeCube={removeCube} addCube={addCube} />)
}

export const Cube = ({ position, texture, removeCube, addCube }) => {
  const [hoverEffect, setHoverEffect] = useState(false)
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

  return (
    <mesh
      ref={ref}
      onPointerMove={e => {
        e.stopPropagation()
        setHoverEffect(true)
      }}
      onPointerOut={e => {
        e.stopPropagation()
        setHoverEffect(false)
      }}
      onClick={e => {
        e.stopPropagation()
        const clickedFace = Math.floor(e.faceIndex / 2)
        const [x, y, z] = ref.current.position
        if (e.altKey) {
          removeCube(x, y, z)
          return
        }

        if (clickedFace === 1 || clickedFace === 0) addCube(x + 1 - clickedFace * 2, y, z)

        if (clickedFace === 5 || clickedFace === 4) {
          const plusZ = clickedFace === 5 ? -1 : 1
          addCube(x, y, z + plusZ)
        }

        if (clickedFace === 3 || clickedFace === 2) {
          const plusY = clickedFace === 3 ? -1 : 1
          addCube(x, y + plusY, z)
        }
      }}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial attach='material' map={texture} color={hoverEffect ? colorTransparent : 'white'} transparent />
    </mesh>
  )
}
