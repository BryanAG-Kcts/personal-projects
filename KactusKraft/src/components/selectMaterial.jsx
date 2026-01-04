import { useEffect } from 'react'
import { texturesList } from '../const/initialState'

export const SelectMaterial = ({ changeMaterial, toggleModal, visibleMenuMaterial }) => {
  useEffect(() => {
    const changeDigitMaterial = e => {
      if (e.key === 'e') toggleModal()
      const parseKey = Number(e.key)
      if (parseKey > texturesList.length || parseKey < 1 || isNaN(parseKey)) return

      const indexMaterial = e.key - 1
      changeMaterial(texturesList[indexMaterial])
      if (visibleMenuMaterial) toggleModal()
    }

    window.addEventListener('keydown', changeDigitMaterial)

    return () => window.removeEventListener('keydown', changeDigitMaterial)
  }, [changeMaterial, toggleModal, visibleMenuMaterial])

  return null
}
