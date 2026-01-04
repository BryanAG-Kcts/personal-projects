import { Experience } from '@/locales/main'

interface Props {
  experience: Experience
}
export const WorkExperience = ({ experience }: Props): JSX.Element => {
  const { text, time, title } = experience
  return (
    <div className='px-2 pl-4 pb-4 border-l-2 greatSection relative'>
      <p className='text-lt-color-blue-100 font-medium'>{time}</p>
      <h3 className='text-xl font-semibold text-lt-color-green-100'>{title}</h3>
      <p>{text}</p>
      <span className='mkTime pulsationShape' />
    </div>
  )
}
