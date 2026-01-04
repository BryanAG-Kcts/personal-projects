import { RouterLangsProps } from '@/locales/constants/constants'
import { AnimationIcon } from '@/shared/components/animateIcon/animationIcon'
import { getLocale } from '@/locales/main'
import './hero.css'

export const Hero = ({ params }: RouterLangsProps): JSX.Element => {
  const { heroName, paragraph, title } = getLocale(params.lang).hero

  return (
    <section id='heroContent' className='w-full flex-col flex items-center justify-center py-10 min-h-[50vh] md:min-h-[80vh] z-10 bgPolygonal relative backGroundMove'>
      <div className='flex flex-col items-center gap-7 md:flex-row md:gap-0 md:w-[700px] md:justify-between lg:w-[900px]'>

        <div className='flex flex-col gap-4 px-3 text-center text-white md:text-left md:max-w-md'>

          <h1 className='text-[40px] lg:text-[50px]'>
            <div className='flex gap-3 justify-center md:justify-start'>
              {title}
              <span className='flex'>
                <AnimationIcon>
                  👋
                </AnimationIcon>
              </span>
            </div>
            {heroName}
          </h1>

          <p className='text-md sm:text-xl'>{paragraph}</p>
        </div>

        <span className='w-64 h-64 overflow-hidden rounded-full md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500 to-lt-color-green-100 p-4'>
          <img
            className='object-cover w-full h-full imgSection rounded-full'
            src='/images/meHero.webp'
            alt='Kactuswow'
          />
        </span>

      </div>
      <div className='w-full h-40' />
      <div className='air air1' />
      <div className='air air2' />
      <div className='air air3' />
      <div className='air air4' />
    </section>
  )
}
