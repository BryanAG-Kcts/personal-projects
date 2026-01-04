import { RouterLangsProps } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import { DarkMode } from '@/shared/components/darkmode/darkmode'
import { TitleGenerator } from '@/shared/components/titleGenerator/titleGenerator'
import { Gallery } from './components/gallery/gallery'
import Return from '@/public/images/icons/return.svg'
import Link from 'next/link'
import { CertificateScroll } from './components/gallery/certificateScroll'

export default function Page ({ params }: RouterLangsProps): JSX.Element {
  const { certificates, paragraph, title } = getLocale(params.lang).certificate
  return (
    <main className='flex flex-col items-center py-7 gap-7 px-3 bgPolygonal relative overflow-x-hidden'>
      <article className='text-white'>
        <TitleGenerator>{title}</TitleGenerator>
        <p className='text-center my-3'>{paragraph}</p>
      </article>

      <Gallery certificates={certificates} />
      <CertificateScroll />

      <div className='absolute top-0 right-0 m-3 bg-white p-3 rounded-full sectionContentDarkmode'>
        <DarkMode />
      </div>

      <Link className='absolute top-0 left-0 m-6 w-10 transition-transform hover:-translate-x-2 text-white' href={`/${params.lang}`} scroll={false}>
        <Return />
      </Link>
    </main>
  )
}
