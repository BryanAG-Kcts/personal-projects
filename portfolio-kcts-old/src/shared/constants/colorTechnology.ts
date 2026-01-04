import { TechnologyNames } from '@/locales/main'

export const tailwindColors: Record<TechnologyNames, string> = {
  typescript: 'dk-color-blue-100',
  javascript: 'lt-color-yellow-100',
  html5: 'dk-color-red-100',
  css3: 'dk-color-blue-100',
  reactjs: 'lt-color-blue-100',
  nodejs: 'lt-color-green-100',
  threejs: 'dk-color-gray-100',
  angular: 'dk-color-red-100',
  springboot: 'dk-color-green-100',
  expressjs: 'black',
  java: 'dk-color-red-100',
  nextjs: 'black',
  github: 'black',
  git: 'black',
  tailwindcss: 'black',
  postgresql: 'black'
}

export const getColorTechnology = (technology: TechnologyNames): string =>
  tailwindColors[technology]
