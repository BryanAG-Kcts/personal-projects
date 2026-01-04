interface Props {
  color: string
}
export const PulsationCircle = ({ color }: Props): JSX.Element => {
  return <span className={`w-3 h-3 bg-${color} rounded-full pulsationShape relative text-${color}`} />
}
