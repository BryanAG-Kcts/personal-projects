import { RouterLangsProps } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import { TitleGenerator } from '@/shared/components/titleGenerator/titleGenerator'
import { WorkExperiences } from '@/shared/components/workExperience/workExperiences'
import './experience.css'

export const Experience = ({ params }: RouterLangsProps): JSX.Element => {
  const { experiences, title } = getLocale(params.lang).experience
  return (
    <section className='greatSection bg-slate-100 p-4 sectionContentDarkmode'>
      <TitleGenerator>
        {title}
      </TitleGenerator>
      <WorkExperiences experiences={experiences} />
    </section>
  )
}
