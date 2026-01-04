import './buttonGrow.css'
interface Props {
  children: JSX.Element
}
export const ButtonGrow = ({ children }: Props): JSX.Element => {
  return (
    <div className='buttonGrow'>
      {children}
    </div>
  )
}
