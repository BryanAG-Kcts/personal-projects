import { RouterLangsProps } from '@/locales/constants/constants'
import { Languages } from './languages'
import { getLocale } from '@/locales/main'
import { DarkMode } from '@/shared/components/darkmode/darkmode'
import './header.css'
import { Sections } from './sections'

export const Header = ({ params }: RouterLangsProps): JSX.Element => {
  const { language, section } = getLocale(params.lang).header

  return (
    <header className='sm:flex-row sm:justify-between sm:items-center cardContentDarkmode'>

      <div className='flex flex-1 justify-between'>
        <p className='text-3xl font-semibold sm:text-left select-none'>
          Kactus
          <span className='text-lt-color-green-100'>wow.</span>
        </p>
        <div className='sm:hidden'><DarkMode /></div>
      </div>

      <nav className='flex flex-1 flex-wrap gap-4 navHeader items-center'>
        <Sections section={section} />
        <Languages languages={language.languages} title={language.title} />
      </nav>

      <div className='sm:flex justify-center hidden'>
        <DarkMode />
      </div>
    </header>
  )
}
