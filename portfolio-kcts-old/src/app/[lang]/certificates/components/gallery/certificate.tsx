import { ButtonGrow } from '@/shared/components/buttonGrow/buttonGrow'
import { Certificate as CT } from '@/locales/main'
interface Props {
  certificate: CT
}
export const Certificate = ({ certificate }: Props): JSX.Element => {
  const { img, name, pdf } = certificate
  return (
    <div className='flex w-full max-w-xl aspect-[16/14] certificateGallery'>
      <div className='flex flex-col gap-4 p-3 rounded-lg bg-slate-100 cardContentDarkmode galleryCertificate'>
        <picture className='rounded-lg overflow-hidden flex-1'>
          <img src={img} alt={name} className='hover:scale-110 transition-transform w-full h-full object-cover imgSection' />
        </picture>

        <ButtonGrow>
          <a target='_blank' href={`/api/certificate/${pdf}`} rel='noreferrer noopener'>{name}</a>
        </ButtonGrow>

      </div>
    </div>
  )
}
