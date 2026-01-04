import { Project } from '@/locales/main'
import { GithubProject } from './githubProject'
import { projectTypes } from '@/locales/constants/project/constants'
interface Props {
  githubProjects: Project[]
}
export const GithubProjects = ({ githubProjects }: Props): JSX.Element => {
  return (
    <section className='flex flex-wrap justify-center w-full gap-3'>
      {
        githubProjects.map(githubProject => githubProject.type !== projectTypes.frontend && <GithubProject key={githubProject.key} githubProject={githubProject} />)
      }
    </section>
  )
}
