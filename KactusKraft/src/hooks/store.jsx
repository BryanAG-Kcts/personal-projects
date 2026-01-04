import { useRef, useState } from 'react'
import { initialStateWold, initialMaterial } from '../const/initialState'
import { nanoid } from 'nanoid'

export const useStoreGame = () => {
  const [boxesGame, setBoxesGame] = useState(initialStateWold)
  const selectMaterial = useRef(initialMaterial)
  const [visibleMenuMaterial, setVisibleMenuMaterial] = useState(false)

  const addCube = (x, y, z) => {
    const newCube = {
      id: nanoid(),
      position: [x, y, z],
      texture: selectMaterial.current
    }

    const newCubes = [...boxesGame, newCube]

    setBoxesGame(newCubes)
  }

  const removeCube = (x, y, z) => {
    const newCube = boxesGame.filter(box => box.position[0] !== x || box.position[1] !== y || box.position[2] !== z)

    setBoxesGame(newCube)
  }

  const changeMaterial = material => (selectMaterial.current = material)
  const toggleModal = () => {
    setVisibleMenuMaterial(!visibleMenuMaterial)
  }

  return {
    boxesGame,
    visibleMenuMaterial,
    addCube,
    removeCube,
    changeMaterial,
    toggleModal
  }
}
