export const projectTypes = {
  backend: 'backend',
  frontend: 'frontend',
  fullStack: 'fullStack'
} as const

export type ProjectType = keyof typeof projectTypes
export const projectImagePath = '/images/projects/'
