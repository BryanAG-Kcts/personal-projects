import { Technology as ITechnology } from '@/locales/main'

interface Props {
  technology: ITechnology
}
export async function Technology ({ technology }: Props): Promise<JSX.Element> {
  const { icon, publicName } = technology
  const Icon = await icon
  return (
    <span title={publicName} className='technologyCard p-4 bg-white rounded-lg select-none cardContentDarkmode technology-hover'>
      <Icon className='w-16 h-16' />
    </span>
  )
}
