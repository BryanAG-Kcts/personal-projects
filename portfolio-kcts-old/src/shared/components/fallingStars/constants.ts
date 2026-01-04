export const shapes = ['star', 'square', 'circle', 'pentagon', 'triangle']
export const sizes = ['small', 'medium', 'large']
export const colors = ['blue-1', 'blue-2', 'green-1', 'green-2']
export const speeds = ['slow', 'fast']
export const animations = ['fall-1', 'fall-2', 'fall-3']
const suffixFall = 'Fall'

interface RandomFeatures {
  randomShape: string
  randomSize: string
  randomColor: string
  randomSpeed: string
  randomAnimation: string
}
export function getRandomFeatures (): RandomFeatures {
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)] + suffixFall
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)] + suffixFall
  const randomColor = colors[Math.floor(Math.random() * colors.length)] + suffixFall
  const randomSpeed = speeds[Math.floor(Math.random() * speeds.length)] + suffixFall
  const randomAnimation = animations[Math.floor(Math.random() * animations.length)]

  return { randomShape, randomSize, randomColor, randomSpeed, randomAnimation }
}
interface Props {
  x: number
  y: number
}
export function isPaint (lastMove: Props, newMove: Props, minDistante: number): boolean {
  const vectorX = newMove.x - lastMove.x
  const vectorY = newMove.y - lastMove.y
  return Math.abs(vectorX) > minDistante || Math.abs(vectorY) > minDistante
}
