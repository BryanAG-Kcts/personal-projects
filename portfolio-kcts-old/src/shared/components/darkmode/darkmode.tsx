'use client'
import { useState } from 'react'
import { themeIcon } from './constants'
import './darkmode.css'

export const DarkMode = (): JSX.Element => {
  const [selectColorMode, setSelectColorMode] = useState(false)
  const { moon, sun } = themeIcon

  const changeDarkMode = (): void => {
    setSelectColorMode(!selectColorMode)
    document.body.classList.toggle('dark')
  }

  const primaryIcon = selectColorMode ? moon : sun
  const secondaryIcon = !selectColorMode ? moon : sun

  return (
    <button aria-label='DarkMode' className='darkmodeBtn flex relative justify-center' onClick={changeDarkMode}>
      <primaryIcon.icon className='firstIcon w-8 h-8  sm:w-10 sm:h-10' />
      <secondaryIcon.icon className='secondIcon w-8 h8 sm:w-10 h-10' />
    </button>
  )
}
