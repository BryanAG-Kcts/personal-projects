
import { Project } from '@/locales/main'
import { ButtonGrow } from '@/shared/components/buttonGrow/buttonGrow'
import { PulsationCircle } from '@/shared/components/pulsationCircle/pulsationCircle'
import { Technologies } from '@/shared/components/technologies/technologies'
import { getColorTechnology } from '@/shared/constants/colorTechnology'
import Link from 'next/link'

interface Props {
  webProject: Project
  visitLink: string
}

export const WebProject = ({ webProject, visitLink }: Props): JSX.Element => {
  const { color, description, linkGitHub, name, linkWeb, preview, technologies } = webProject
  const colorTechnology = getColorTechnology(color)

  return (
    <div className='relative flex flex-col max-w-sm gap-3 p-2 bg-white rounded-lg cardContentDarkmode'>

      <div className='flex flex-col justify-between gap-3'>
        <picture className='overflow-hidden rounded-lg'>
          <img decoding='async' loading='lazy' className='object-cover w-full h-full ease-in scaleImage aspect-square' src={preview} alt={name} />
        </picture>

        <div className='flex items-center gap-7'>
          <h3 className='text-lg font-semibold'>{name}</h3>
          <PulsationCircle color={colorTechnology} />
        </div>

      </div>

      <div className='flex-1 gridTechnology'>

        <div className='flex flex-col justify-between gap-5'>

          <p>{description}</p>

          <div className='flex flex-wrap anchorsGallery gap-2'>
            <ButtonGrow>
              <Link href={linkWeb ?? ''}>{visitLink}</Link>
            </ButtonGrow>
            <ButtonGrow>
              <Link href={linkGitHub}>GitHub</Link>
            </ButtonGrow>
          </div>
        </div>

        <div className='flex items-center flex-1 rounded-lg bg-slate-100 sectionContentDarkmode projectsGallery p-3 overflow-hidden'>
          <Technologies technologies={technologies ?? []} />
        </div>
      </div>

    </div>
  )
}
