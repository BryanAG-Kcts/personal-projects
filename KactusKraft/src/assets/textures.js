import {
  grassImg,
  dirtImg,
  logImg,
  glassImg,
  woodImg
} from './images.js'

import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const grassTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)

const groundTexture = new TextureLoader().load(grassImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

const magFilterReafactory = img => (img.magFilter = NearestFilter)

magFilterReafactory(groundTexture)
magFilterReafactory(grassTexture)
magFilterReafactory(dirtTexture)
magFilterReafactory(logTexture)
magFilterReafactory(glassTexture)
magFilterReafactory(woodTexture)

export {
  grassImg,
  dirtImg,
  logImg,
  glassImg,
  woodImg,
  groundTexture,
  grassTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture
}
