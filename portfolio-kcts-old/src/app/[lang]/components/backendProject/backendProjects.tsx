import { RouterLangsProps } from '@/locales/constants/constants'
import { TitleGenerator } from '@/shared/components/titleGenerator/titleGenerator'
import { GithubProjects } from './githubProjects'
import { getLocale } from '@/locales/main'

export const BackendProjects = ({ params }: RouterLangsProps): JSX.Element => {
  const { nameGithub, projects } = getLocale(params.lang).projects

  return (
    <div className='flex flex-col gap-4 items-center flex-1 lg:flex-[2]'>
      <TitleGenerator>
        {nameGithub}
      </TitleGenerator>
      <GithubProjects githubProjects={projects} />
    </div>
  )
}
