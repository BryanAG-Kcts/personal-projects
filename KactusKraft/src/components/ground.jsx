import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../assets/textures'

export const Ground = ({ addCube }) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }))

  const changeAddCube = e => {
    e.stopPropagation()
    const [x, y, z] = Object.values(e.point).map(point => Math.ceil(point))

    addCube(x, y, z)
  }

  groundTexture.repeat.set(100, 100)

  return (
    <mesh ref={ref} onClick={changeAddCube}>
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )
}
