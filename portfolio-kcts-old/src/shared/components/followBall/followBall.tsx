'use client'
import { useEffect } from 'react'
import './followBall.css'

export const FollowBall = (): JSX.Element => {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent)
    if (isMobile) return

    window.addEventListener('mousemove', followBall)
    return () => window.removeEventListener('mousemove', followBall)
  }, [])

  const followBall = (e: MouseEvent): void => {
    const followBall = document.getElementById('followBall')
    followBall?.style.setProperty('--moveX', `${e.clientX + 30}px`)
    followBall?.style.setProperty('--moveY', `${e.clientY + 30}px`)
  }

  return (
    <section className='fixed  w-full h-screen z-50 pointer-events-none'>
      <span id='followBall' className='w-12 h-12 z-50 rounded-full' />
    </section>
  )
}
