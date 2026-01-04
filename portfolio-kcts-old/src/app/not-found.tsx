import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kactus not found',
  description: 'Page not found',
  robots: { index: false, follow: false }
}

export default function NotFound (): JSX.Element {
  return (
    <section className='w-full h-screen font-quickSand grid place-content-center bgPolygonal relative overflow-hidden'>

      <div className='flex flex-col items-center gap-3 z-10 text-center'>
        <h1 className='text-9xl font-bold'>404</h1>
        <p className='text-xl font-bold'>Page not found</p>
        <p className='text-lg'>The page you are looking for does not exist</p>
        <Link href='/es' scroll={false} className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:scale-95 transition-transform'>Go back</Link>

      </div>
      <img className='absolute left-0 opacity-10 -bottom-10 xl:translate-x-1/2' src='/images/icons/branchLeaves.svg' alt='branch' />
    </section>
  )
}
