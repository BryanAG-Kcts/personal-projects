
import { RouterLangsProps, languages } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
  children: JSX.Element
  params: RouterLangsProps['params']
}

export const generateMetadata = ({ params }: RouterLangsProps): Metadata => {
  const { title, description } = getLocale(params.lang).head.home

  return {
    title,
    description,
    alternates: {
      canonical: `https://portfolio-kcts.vercel.app/${params.lang}`
    }
  }
}

export default function Layout ({ children, params }: Props): JSX.Element {
  if (!(params.lang in languages)) notFound()

  return children
}
