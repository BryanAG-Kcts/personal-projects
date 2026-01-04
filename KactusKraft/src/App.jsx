import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/ground'
import { Pov } from './components/POV'
import { Player } from './components/player'
import { useStoreGame } from './hooks/store'
import { Cubes } from './components/cubes'
import { SelectMaterial } from './components/selectMaterial'
import { ModalMaterial } from './components/modalMaterial'

function App () {
  const { boxesGame, visibleMenuMaterial, addCube, removeCube, changeMaterial, toggleModal } = useStoreGame()
  return (
    <>
      <Canvas>
        <Sky />
        <ambientLight intensity={1} />
        <Pov />
        <SelectMaterial changeMaterial={changeMaterial} visibleMenuMaterial={visibleMenuMaterial} toggleModal={toggleModal} />
        <Physics>
          <Cubes addCube={addCube} boxesGame={boxesGame} removeCube={removeCube} />
          <Ground addCube={addCube} />
          <Player />
        </Physics>
      </Canvas>
      <span className='pointerInGame'>+</span>
      <ModalMaterial visibleMenuMaterial={visibleMenuMaterial} />
    </>
  )
}

export default App
