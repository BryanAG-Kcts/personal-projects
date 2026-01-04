import { Technology as ITechnology } from '@/locales/main'
import { Technology } from './technology'

interface Props {
  technologies: ITechnology[]
}
export const Technologies = ({ technologies }: Props): JSX.Element => {
  return (
    <div className='flex flex-wrap justify-center w-full gap-3'>
      {technologies.map(technology => <Technology key={technology.name} technology={technology} />)}
    </div>
  )
}
