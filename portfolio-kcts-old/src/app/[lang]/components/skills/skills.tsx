import { RouterLangsProps } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import { Technologies } from '@/shared/components/technologies/technologies'
import { TitleGenerator } from '@/shared/components/titleGenerator/titleGenerator'
import { SkillsIntro } from './skillsIntro'

export const Skills = ({ params }: RouterLangsProps): JSX.Element => {
  const { name, skills } = getLocale(params.lang).skills

  return (
    <>
      <section className='flex flex-col gap-4 skillsSection'>
        <TitleGenerator>{name}</TitleGenerator>
        <Technologies technologies={skills} />
      </section>
      <SkillsIntro />
    </>
  )
}
