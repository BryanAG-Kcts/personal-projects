import { Information } from '@/locales/main'
import { Info } from './info'

interface Props {
  information: Information[]
}
export const Infos = ({ information }: Props): JSX.Element => {
  return <>{information.map(info => <Info key={info.key} information={info} />)}</>
}
