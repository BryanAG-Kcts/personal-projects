import { ElementType } from 'react'
import { getTechnologySvg } from './technologies'

export const noLink = '#'

interface Information {
  path: Promise<ElementType>
  link: string
  answer: string
  name: string
  key: string
}

const getSvg = async (path: string): Promise<ElementType> => await import(`@/public/images/icons/${path}`).then(module => module.default)

export const informationBody: Record<string, Information> = {
  name: {
    path: getSvg('avatarUser.svg'),
    link: noLink,
    answer: 'Bryan David Álvarez Galvis',
    key: 'name',
    name: ''
  },
  location: {
    path: getSvg('location.svg'),
    link: noLink,
    key: 'location',
    name: '',
    answer: ''
  },
  github: {
    path: getTechnologySvg('github.svg'),
    link: 'https://github.com/BryanAG-Kcts',
    answer: 'BryanAG-Kcts',
    name: 'Github',
    key: 'github'
  },
  email: {
    path: getSvg('email.svg'),
    link: 'mailto:bryanalvarezg.kcts@gmail.com',
    answer: 'bryanalvarezg.kcts@gmail.com',
    name: 'Email',
    key: 'email'
  },
  linkedin: {
    path: getSvg('linkedin.svg'),
    link: 'https://www.linkedin.com/in/bryanag-kcts',
    answer: 'BryanAG-Kcts',
    name: 'Linkedin',
    key: 'linkedin'
  },
  university: {
    path: getSvg('university.svg'),
    link: 'https://www.facebook.com/UFPSO/?locale=es_LA',
    answer: 'Ufpso',
    key: 'university',
    name: ''
  }
}

export interface NewInformation {
  name?: string
  answer?: string
}

export const getLocaleInformation = (
  newInformation: Record<string, NewInformation>
): Information[] =>
  Object.values(informationBody).map((information) => ({
    ...information,
    ...newInformation[information.key]
  }))
