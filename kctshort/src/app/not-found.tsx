import Link from 'next/link'

export default function notFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center font-poppins'>
      <h1 className='text-2xl font-semibold'>404 - Page Not Found</h1>
      <p className='text-sm md:text-lg'>
        The page you are looking for does not exist or your link has already
        expired
      </p>
      <Link className='text-sm md:text-base underline' href='/'>
        Go back home
      </Link>
    </div>
  )
}
