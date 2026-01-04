import { Technology, TechnologyNames } from '../../main'
import { technologies } from '../technologies'
import { ProjectType, projectImagePath, projectTypes } from './constants'
import { linksGitHub, linksWeb } from './links'

export interface Project {
  name: string
  technology: string
  color: TechnologyNames
  linkGitHub: string
  type: ProjectType
  key: string
  description: string

  linkWeb?: string
  preview?: string
  technologies?: Technology[]
}

const {
  css3,
  expressjs,
  html5,
  nextjs,
  javascript,
  nodejs,
  reactjs,
  typescript,
  tailwindcss,
  threejs,
  postgresql
} = technologies

const { backend, frontend, fullStack } = projectTypes

export const projectsBody: Record<string, Project> = {
  portfolio: {
    name: 'Kactuswow',
    technology: nextjs.publicName,
    color: nextjs.name,
    linkGitHub: linksGitHub.portfolio,
    key: 'portfolio',
    type: backend,
    description: ''
  },
  sittingnt: {
    name: "Sittingn't",
    technology: css3.publicName,
    color: css3.name,
    linkGitHub: linksGitHub.sittingnt,
    key: 'sittingnt',
    type: backend,
    description: ''
  },
  kctsground: {
    name: 'Kctsground',
    technology: nextjs.publicName,
    color: nextjs.name,
    linkGitHub: linksGitHub.kctsground,
    key: 'kctsground',
    type: frontend,
    technologies: [nextjs, typescript, tailwindcss, css3],
    linkWeb: linksWeb.kctsground,
    preview: `${projectImagePath}kctsGround.webp`,
    description: ''
  },
  landing: {
    name: 'Landing 3D',
    technology: threejs.publicName,
    color: threejs.name,
    linkGitHub: linksGitHub.landing,
    key: 'landing',
    type: frontend,
    linkWeb: linksWeb.landing,
    preview: `${projectImagePath}landing.webp`,
    technologies: [nextjs, typescript, tailwindcss, threejs],
    description: ''
  },
  kctshort: {
    name: 'Kctshort',
    technology: nextjs.publicName,
    color: nextjs.name,
    linkGitHub: linksGitHub.kctshort,
    linkWeb: linksWeb.kctshort,
    technologies: [css3, nextjs, tailwindcss, typescript, postgresql],
    key: 'kctshort',
    type: fullStack,
    preview: `${projectImagePath}kctshort.webp`,
    description: ''
  },
  game2048: {
    name: '2048',
    technology: reactjs.publicName,
    color: reactjs.name,
    linkGitHub: linksGitHub.game2048,
    linkWeb: linksWeb.game2048,
    technologies: [css3, reactjs, typescript, postgresql, expressjs, nodejs],
    key: 'game2048',
    type: frontend,
    preview: `${projectImagePath}game2048.webp`,
    description: ''
  },
  simpleTranslate: {
    name: 'SimpleTranslate',
    technology: reactjs.publicName,
    color: reactjs.name,
    linkGitHub: linksGitHub.simpleTranslate,
    linkWeb: linksWeb.simpleTranslate,
    technologies: [css3, reactjs, typescript, tailwindcss],
    key: 'simpleTranslate',
    type: frontend,
    preview: `${projectImagePath}simpleTranslate.webp`,
    description: ''
  },
  infoCountry: {
    name: 'InfoCountry',
    technology: reactjs.publicName,
    color: reactjs.name,
    linkGitHub: linksGitHub.infoCountry,
    linkWeb: linksWeb.infoCountry,
    technologies: [css3, reactjs, typescript, tailwindcss],
    key: 'infoCountry',
    type: frontend,
    preview: `${projectImagePath}infoCountry.webp`,
    description: ''
  },
  kactusKraft: {
    name: 'KactusKraft',
    technology: threejs.publicName,
    color: threejs.name,
    linkGitHub: linksGitHub.kactusKraft,
    linkWeb: linksWeb.kactusKraft,
    technologies: [css3, reactjs, javascript, html5, threejs],
    key: 'kactusKraft',
    type: frontend,
    preview: `${projectImagePath}kactusKraft.webp`,
    description: ''
  },
  tsDo: {
    name: 'Ts Do',
    technology: reactjs.publicName,
    color: reactjs.name,
    linkGitHub: linksGitHub.tsDo,
    linkWeb: linksWeb.tsDo,
    technologies: [css3, reactjs, typescript, tailwindcss],
    key: 'tsDo',
    type: frontend,
    preview: `${projectImagePath}tsDo.webp`,
    description: ''
  },
  button: {
    name: 'The button',
    technology: javascript.publicName,
    color: javascript.name,
    linkGitHub: linksGitHub.button,
    linkWeb: linksWeb.button,
    technologies: [css3, html5, javascript, tailwindcss],
    key: 'button',
    type: frontend,
    preview: `${projectImagePath}button.webp`,
    description: ''
  },
  wapiw: {
    name: 'WapiW',
    technology: javascript.publicName,
    color: javascript.name,
    linkGitHub: linksGitHub.wapiw,
    key: 'wapiw',
    type: backend,
    description: ''
  },
  tictactoe: {
    name: 'TicTacToe',
    technology: reactjs.publicName,
    color: reactjs.name,
    linkGitHub: linksGitHub.tictactoe,
    linkWeb: linksWeb.tictactoe,
    technologies: [css3, reactjs, javascript, tailwindcss],
    key: 'tictactoe',
    type: frontend,
    preview: `${projectImagePath}ticTacToe.webp`,
    description: ''
  },
  kctsExpressGenerator: {
    name: 'Kcts-Express-Generator',
    technology: typescript.publicName,
    color: typescript.name,
    linkGitHub: linksGitHub.kctsExpressGenerator,
    key: 'kctsExpressGenerator',
    type: backend,
    description: ''
  },
  backGame2048: {
    name: '2048',
    technology: expressjs.publicName,
    color: expressjs.name,
    linkGitHub: linksGitHub.backGame2048,
    key: 'backGame2048',
    type: backend,
    description: ''
  } as const
}

export const getLocaleProject = (
  newProject: Record<string, string>
): Project[] =>
  Object.values(projectsBody).map(project => ({
    ...project,
    description: newProject[project.key]
  }))
