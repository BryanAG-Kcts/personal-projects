import { Project } from '@/locales/main'
import { PulsationCircle } from '@/shared/components/pulsationCircle/pulsationCircle'
import { getColorTechnology } from '@/shared/constants/colorTechnology'

interface Props {
  githubProject: Project
}
export const GithubProject = ({ githubProject }: Props): JSX.Element => {
  const { color, description, linkGitHub, name, technology } = githubProject
  const colorTailwind = getColorTechnology(color)
  return (
    <a href={linkGitHub} target='_blank' rel='noreferrer' className='bg-white rounded-2xl px-5 py-7 min-w-[200px] max-w-[600px] flex-1 lg:min-w-[400px] shadow-lg transition-transform hover:scale-[101%] hover:z-10 ssm:hover:scale-95 cardContentDarkmode flex flex-col justify-between'>

      <div className='flex flex-col gap-2 mb-7'>
        <h3 className='font-semibold'>{name}</h3>
        <p>{description}</p>
      </div>

      <div className='flex items-center gap-4 justify-end'>
        <PulsationCircle color={colorTailwind} />
        <p className='text-sm font-semibold'>{technology}</p>
      </div>
    </a>
  )
}
