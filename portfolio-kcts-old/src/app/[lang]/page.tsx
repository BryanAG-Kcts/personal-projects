import { RouterLangsProps } from '@/locales/constants/constants'
import { Hero } from './components/hero/hero'
import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import dynamic from 'next/dynamic'

const Gallery = dynamic(async () => await import('./components/frontendProject/gallery').then(m => m.Gallery))
const About = dynamic(async () => await import('./components/about/about').then(m => m.About))
const Footer = dynamic(async () => await import('./components/footer/footer').then(m => m.Footer))
const Skills = dynamic(async () => await import('./components/skills/skills').then(m => m.Skills))
const Information = dynamic(async () => await import('./components/information/information').then(m => m.Information))
const BackendProjects = dynamic(async () => await import('./components/backendProject/backendProjects').then(m => m.BackendProjects))
const HoverTechnology = dynamic(async () => await import('@/shared/components/technologies/hoverTechnology').then(m => m.HoverTechnology),
  { ssr: false }
)
const FallingStars = dynamic(async () => await import('@/shared/components/fallingStars/fallingStars').then(m => m.FallingStars),
  { ssr: false }
)

export default function Page ({ params }: RouterLangsProps): JSX.Element {
  return (
    <>
      <Header params={params} />
      <Hero params={params} />
      <section id='mainContent' className='greatSection p-2'>
        <Experience params={params} />

        <main className='flex flex-col w-full gap-6 p-3 rounded-lg sectionContentDarkmode bg-slate-100 md:flex-row overflow-hidden'>
          <aside className='flex flex-col items-center flex-1 gap-6'>
            <Skills params={params} />
            <Information params={params} />
          </aside>
          <BackendProjects params={params} />
        </main>

        <Gallery params={params} />
        <About params={params} />

      </section>
      <Footer />

      <HoverTechnology />
      <FallingStars />
    </>
  )
}
