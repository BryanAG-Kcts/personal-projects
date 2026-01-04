import { useEffect, useState } from 'react'

const ACTIONS_KEYBOARD_MAP = {
  KeyW: 'moveForward',
  KeyS: 'moveBackward',
  KeyA: 'moveLeft',
  KeyD: 'moveRight',
  Space: 'jump'
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false
  })

  useEffect(() => {
    const changeKeyTrue = e => {
      const { code } = e
      const action = ACTIONS_KEYBOARD_MAP[code]
      if (action) {
        setActions(prevAction => ({
          ...prevAction,
          [action]: true
        }))
      }
    }

    const changeKeyFalse = e => {
      const { code } = e
      const action = ACTIONS_KEYBOARD_MAP[code]
      if (action) {
        setActions(prevAction => ({
          ...prevAction,
          [action]: false
        }))
      }
    }

    window.addEventListener('keydown', changeKeyTrue)
    window.addEventListener('keyup', changeKeyFalse)

    return () => {
      window.removeEventListener('keydown', changeKeyTrue)
      window.removeEventListener('keyup', changeKeyFalse)
    }
  }, [])

  return actions
}
