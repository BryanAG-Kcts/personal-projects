import { Languages } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import { TitleGenerator } from '@/shared/components/titleGenerator/titleGenerator'

interface Props {
  lang: Languages
}

export const SoftSkills = ({ lang }: Props): JSX.Element => {
  const { title, paragraph, softSkills } = getLocale(lang).softSkill

  return (
    <div className='rounded-lg p-2 flex flex-col gap-3'>
      <TitleGenerator>
        {title}
      </TitleGenerator>

      <article>
        <p className='mb-4'>{paragraph}</p>
        <ul className='ulGrid'>
          {
            softSkills.map(text => {
              return (
                <li className='flex gap-5 items-center' key={text}>
                  <span className='w-2 h-2 rounded-full pulsationShape relative bg-lt-color-green-200 text-lt-color-green-200' />
                  <p>{text}</p>
                </li>
              )
            })
          }
        </ul>
      </article>
    </div>
  )
}
