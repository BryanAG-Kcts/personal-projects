import { TitleGenerator } from '@/shared/components/titleGenerator/titleGenerator'
import { WebProjects } from './webProjects'
import { RouterLangsProps } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import './gallery.css'
import { TechnologyScroll } from './technologyScroll'

export const Gallery = ({ params }: RouterLangsProps): JSX.Element => {
  const { nameWeb, projects } = getLocale(params.lang).projects

  return (
    <section id='projectsContent' className='greatSection p-4 rounded-lg bg-slate-100 sectionContentDarkmode'>
      <TitleGenerator>
        {nameWeb}
      </TitleGenerator>
      <WebProjects webProjects={projects} lang={params.lang} />
      <TechnologyScroll />
    </section>
  )
}
