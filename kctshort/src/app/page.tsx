import { LinkInput } from '@/components/linkInput'

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center flex-col font-poppins text-center p-2'>
      <h1 className='text-4xl font-semibold md:text-6xl'>KCTSHORT</h1>
      <p className='text-sm md:text-base'>
        Welcome to kctshort, here you can shorten links easily and without ads
      </p>

      <LinkInput />
    </div>
  )
}
