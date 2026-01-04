import { ButtonGrow } from '@/shared/components/buttonGrow/buttonGrow'
import { AboutAside } from './aboutAside'
import { SoftSkills } from './softSkills'
import { RouterLangsProps } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import Link from 'next/link'
import './about.css'

export const About = ({ params }: RouterLangsProps): JSX.Element => {
  const { certificateLink, cvLink } = getLocale(params.lang).indie

  return (
    <div className='bg-slate-100 rounded-lg w-full sectionContentDarkmode p-4'>
      <section id='aboutContent' className='p-4 flex flex-col gap-4 mx-auto md:flex-row-reverse max-w-7xl'>

        <div className='flex flex-col gap-4 lg:flex-1'>

          <img draggable='false' decoding='async' loading='lazy' className='aspect-square object-cover rounded-lg max-w-sm w-full mx-auto' src='/images/meAbout.webp' alt='🌵' />
          <ButtonGrow>
            <a href={`/api/${params.lang}/cv`} target='_blank' rel='noopener noreferrer'>{cvLink}</a>
          </ButtonGrow>
          <ButtonGrow>
            <Link href={`/${params.lang}/certificates`}>{certificateLink}</Link>
          </ButtonGrow>

        </div>

        <section className='md:flex-1 lg:flex-[2]'>
          <AboutAside lang={params.lang} />
          <SoftSkills lang={params.lang} />
        </section>
      </section>
    </div>
  )
}
