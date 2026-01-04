'use client'
import { useEffect } from 'react'
import { mouseInHover, mouseOutHover } from './constants'

export const HoverTechnology = (): null => {
  useEffect(() => {
    const technologies = document.querySelectorAll<HTMLSpanElement>('.technology-hover')
    technologies.forEach(technology => {
      const handleMouseEnter = (): void => { mouseInHover(technology) }
      const handleMouseLeave = (): void => { mouseOutHover(technology) }
      const handleTouchStart = (): void => { mouseInHover(technology) }
      const handleTouchEnd = (): void => { mouseOutHover(technology) }

      technology.addEventListener('mouseenter', handleMouseEnter)
      technology.addEventListener('mouseleave', handleMouseLeave)
      technology.addEventListener('touchstart', handleTouchStart)
      technology.addEventListener('touchend', handleTouchEnd)
    })
  }, [])

  return null
}
