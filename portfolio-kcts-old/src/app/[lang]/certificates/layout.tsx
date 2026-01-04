import { RouterLangsProps } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import { FollowBall } from '@/shared/components/followBall/followBall'
import { Metadata } from 'next'

interface Props {
  children: JSX.Element
}

export function generateMetadata ({ params }: RouterLangsProps): Metadata {
  const { description, title } = getLocale(params.lang).head.certificates

  return {
    title,
    description,
    alternates: {
      canonical: `https://portfolio-kcts.vercel.app/${params.lang}/certificates`
    }
  }
}

export default function Layout ({ children }: Props): JSX.Element {
  return (
    <>
      <FollowBall />
      {children}
    </>
  )
}
