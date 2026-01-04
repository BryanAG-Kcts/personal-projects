'use client'
import { useEffect, useRef } from 'react'
import { getRandomFeatures, isPaint } from './constants'
import './fallingStars.css'

export const FallingStars = (): JSX.Element => {
  const lastMove = useRef({
    x: 0,
    y: 0
  })

  const fallingStars = (e: MouseEvent): void => {
    const { clientX, clientY } = e
    if (!isPaint(lastMove.current, { x: clientX, y: clientY }, 60)) return

    const fallingStar = document.getElementById('fallingStars')
    const star = document.createElement('div')
    const { randomAnimation, randomColor, randomShape, randomSize, randomSpeed } = getRandomFeatures()
    star.className = `dotFall ${randomAnimation} ${randomColor} ${randomShape} ${randomSize} ${randomSpeed}`
    star.style.left = `${clientX}px`
    star.style.top = `${clientY}px`
    fallingStar?.appendChild(star)

    setTimeout(() => { fallingStar?.removeChild(star) }, 1000)
    lastMove.current = { x: clientX, y: clientY }
  }

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent)
    if (isMobile) return

    window.addEventListener('mousemove', fallingStars)
    return () => window.removeEventListener('mousemove', fallingStars)
  }, [])

  return <section id='fallingStars' className='fixed top-0 left-0 w-full h-screen z-50 pointer-events-none' />
}
