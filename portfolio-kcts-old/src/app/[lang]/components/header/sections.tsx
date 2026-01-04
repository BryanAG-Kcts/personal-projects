import { HeaderSection } from '@/locales/es/header'

interface Props {
  section: HeaderSection
}
export const Sections = ({ section }: Props): JSX.Element => {
  const { sections, title } = section
  return (
    <div className='hoverToModal border-b flex-1 relative cursor-pointer'>
      <p>{title}</p>

      <div className='modalsection boxCol hidden cardContentDarkmode z-50'>
        {sections.map(section => {
          const { link, name } = section
          return <a key={name} className='py-2 hover:bg-dk-color-gray-100 hover:rounded hover:opacity-75' href={link}>{name}</a>
        })}
      </div>
    </div>
  )
}
