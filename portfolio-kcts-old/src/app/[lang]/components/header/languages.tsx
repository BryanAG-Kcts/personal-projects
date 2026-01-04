import { Languages as Langs } from '@/locales/constants/constants'
import { Language } from './language'

interface Props {
  title: string
  languages: Array<{
    name: string
    value: Langs
  }>
}
export const Languages = ({ languages, title }: Props): JSX.Element => {
  return (
    <div className='cursor-pointer hoverToModal relative border-b flex-1'>
      <p>{title}</p>

      <ul className='modalsection boxCol hidden cardContentDarkmode z-50'>
        {languages.map(language => <Language language={language} key={language.value} />)}
      </ul>
    </div>
  )
}
