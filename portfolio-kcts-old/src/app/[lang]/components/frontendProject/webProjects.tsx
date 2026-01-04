import { Project, getLocale } from '@/locales/main'
import { WebProject } from './webProject'
import { projectTypes } from '@/locales/constants/project/constants'
import { Languages } from '@/locales/constants/constants'

interface Props {
  webProjects: Project[]
  lang: Languages
}
export const WebProjects = ({ webProjects, lang }: Props): JSX.Element => {
  const { visit } = getLocale(lang).indie
  return (
    <div className='flex flex-wrap justify-center gap-3 p-2'>
      {
        webProjects.map(webProject => webProject.type !== projectTypes.backend && <WebProject key={webProject.key} webProject={webProject} visitLink={visit} />)
      }
    </div>
  )
}
