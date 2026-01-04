import es from './es/main'
import en from './en/main'
import { Languages } from './constants/constants'

export const main = {
  es,
  en
}

export type Locale = typeof main.es
export type Experience = (typeof main.es.experience.experiences)[number]
export type Technology = (typeof main.es.skills.skills)[number]
export type TechnologyNames = Technology['name']
export type Information = (typeof main.es.information.information)[number]
export type Project = (typeof main.es.projects.projects)[number]
export type Certificate = (typeof main.es.certificate.certificates)[number]

export const getLocale = (lang: Languages): Locale => main[lang] ?? main.es
