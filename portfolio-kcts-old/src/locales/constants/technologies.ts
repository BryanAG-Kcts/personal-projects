import { ElementType } from 'react'

export const technologyImagePath = '/images/technologies/'

export const getTechnologySvg = async (name: string): Promise<ElementType> => await import('@/public/images/technologies/' + name).then(module => module.default)

export const technologies = {
  html5: {
    publicName: 'HTML 5',
    name: 'html5',
    icon: getTechnologySvg('html5.svg')
  },
  css3: {
    publicName: 'CSS 3',
    name: 'css3',
    icon: getTechnologySvg('css3.svg')
  },
  javascript: {
    publicName: 'JavaScript',
    name: 'javascript',
    icon: getTechnologySvg('javascript.svg')
  },
  reactjs: {
    publicName: 'React',
    name: 'reactjs',
    icon: getTechnologySvg('reactjs.svg')
  },
  nodejs: {
    publicName: 'Node.js',
    name: 'nodejs',
    icon: getTechnologySvg('nodejs.svg')
  },
  expressjs: {
    publicName: 'Express.js',
    name: 'expressjs',
    icon: getTechnologySvg('expressjs.svg')
  },
  java: {
    publicName: 'Java',
    name: 'java',
    icon: getTechnologySvg('java.svg')
  },
  tailwindcss: {
    publicName: 'Tailwind CSS',
    name: 'tailwindcss',
    icon: getTechnologySvg('tailwindcss.svg')
  },
  git: {
    publicName: 'Git',
    name: 'git',
    icon: getTechnologySvg('git.svg')
  },
  github: {
    publicName: 'GitHub',
    name: 'github',
    icon: getTechnologySvg('github.svg')
  },
  typescript: {
    publicName: 'TypeScript',
    name: 'typescript',
    icon: getTechnologySvg('typescript.svg')
  },
  postgresql: {
    publicName: 'PostgreSQL',
    name: 'postgresql',
    icon: getTechnologySvg('postgresql.svg')
  },
  nextjs: {
    publicName: 'Next.js',
    name: 'nextjs',
    icon: getTechnologySvg('nextjs.svg')
  },
  threejs: {
    publicName: 'Three.js',
    name: 'threejs',
    icon: getTechnologySvg('threejs.svg')
  },
  angular: {
    publicName: 'Angular',
    name: 'angular',
    icon: getTechnologySvg('angular.svg')
  },
  springboot: {
    publicName: 'Spring Boot',
    name: 'springboot',
    icon: getTechnologySvg('springboot.svg')
  }
} as const

export const technologiesEntities = Object.values(technologies)
