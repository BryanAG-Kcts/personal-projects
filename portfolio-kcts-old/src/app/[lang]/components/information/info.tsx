import { noLink } from '@/locales/constants/information'
import { Information } from '@/locales/main'

interface Props {
  information: Information
}
export const Info = async ({ information }: Props): Promise<JSX.Element> => {
  const { answer, name, path, link } = information
  const Icon = await path
  const isSelectable = link !== noLink ? '' : 'selected-none'
  return (
    <span className='flex justify-between gap-5'>

      <div className='flex items-center gap-3'>
        <Icon className='w-4 h-4' />
        <p className='whitespace-nowrap'>{name} :</p>
      </div>

      <a href={link} target='_blank' className={`font-medium truncate duration-150 hover:text-lt-color-green-100 ${isSelectable}`} rel='noreferrer noopener'>{answer}</a>

    </span>
  )
}
