import { Experience } from '@/locales/main'
import { WorkExperience } from './workExperience'

interface Props {
  experiences: Experience[]
}
export const WorkExperiences = ({ experiences }: Props): JSX.Element => {
  return (
    <section className='grid grid-cols-1 px-4 py-2 lg:grid-cols-2 gap-6'>
      {
        experiences.map(experience => <WorkExperience key={experience.title} experience={experience} />)
      }
    </section>
  )
}
