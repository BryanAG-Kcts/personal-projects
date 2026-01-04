import { Certificate as CT } from '@/locales/main'
import { Certificate } from './certificate'

interface Props {
  certificates: CT[]
}
export const Gallery = ({ certificates }: Props): JSX.Element => {
  return (
    <section className='flex flex-wrap gap-5 justify-center overflow-x-hidden'>
      {
        certificates.map(certificate => <Certificate certificate={certificate} key={certificate.name} />)
      }
    </section>
  )
}
