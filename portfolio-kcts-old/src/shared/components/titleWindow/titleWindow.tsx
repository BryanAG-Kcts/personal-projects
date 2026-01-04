'use client'
import { useEffect, useRef } from 'react'

export const TitleWindow = (): null => {
  const firstTitle = useRef<string>()

  const focusWindow = (): void => {
    document.title = firstTitle.current ?? 'Kactuswow'
  }

  const blurWindow = (): void => {
    firstTitle.current = document.title
    document.title = '¡Kactuswow! 🕒💣'
  }

  useEffect(() => {
    window.addEventListener('blur', blurWindow)
    window.addEventListener('focus', focusWindow)

    return () => {
      window.removeEventListener('blur', blurWindow)
      window.removeEventListener('focus', focusWindow)
    }
  }, [])

  return null
}
