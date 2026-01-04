export type Languages = 'es' | 'en'
export const languages: Record<Languages, Languages> = {
  es: 'es',
  en: 'en'
}
export interface RouterLangsProps {
  params: {
    lang: Languages
  }
}
export const nowadays = {
  es: 'Actualmente...',
  en: 'Nowadays...'
}
