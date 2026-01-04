import { Languages } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import { TitleGenerator } from '@/shared/components/titleGenerator/titleGenerator'

interface Props {
  lang: Languages
}
export const AboutAside = ({ lang }: Props): JSX.Element => {
  const { paragraphs, title } = getLocale(lang).about
  return (
    <article className='flex flex-col p-2 gap-3 rounded-lg'>
      <TitleGenerator>{title}</TitleGenerator>
      {
        paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)
      }
    </article>
  )
}
