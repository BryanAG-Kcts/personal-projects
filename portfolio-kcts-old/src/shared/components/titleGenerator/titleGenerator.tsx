interface Props {
  children: string
}
export function TitleGenerator ({ children }: Props): JSX.Element {
  return (
    <h2 className='text-xl font-semibold text-center sm:text-2xl'>
      {children}
      <span className='text-4xl text-lt-color-green-200'>.</span>
    </h2>
  )
}
