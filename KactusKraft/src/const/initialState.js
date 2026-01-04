import { nanoid } from 'nanoid'
import {
  grassImg,
  dirtImg,
  logImg,
  glassImg,
  woodImg,

  grassTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture
} from '../assets/textures'

export const texturesList = [
  grassTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture
]

export const previewTextures = [
  {
    src: grassImg,
    name: 'Césped'
  },
  {
    src: dirtImg,
    name: 'Tierra'
  },
  {
    src: logImg,
    name: 'Tronco'
  },
  {
    src: glassImg,
    name: 'Vidrio'
  },
  {
    src: woodImg,
    name: 'Madera'
  }
]

export const initialStateWold = [
  {
    id: nanoid(),
    position: [1, 0, 1],
    texture: logTexture
  },
  {
    id: nanoid(),
    position: [10, 2, 2],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [12, 3, 6],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [22, 3, 6],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [28, 4, 7],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [36, 5, 8],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [45, 7, 11],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [45, 7, 0],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [35, 7, -3],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [35, 10, -5],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [32, 10, -15],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [32, 11, -27],
    texture: woodTexture
  },

  {
    id: nanoid(),
    position: [21, 12, -26],
    texture: glassTexture
  },
  {
    id: nanoid(),
    position: [21, 12, -27],
    texture: glassTexture
  },
  {
    id: nanoid(),
    position: [21, 12, -28],
    texture: glassTexture
  },

  {
    id: nanoid(),
    position: [20, 12, -26],
    texture: glassTexture
  },
  {
    id: nanoid(),
    position: [20, 12, -27],
    texture: glassTexture
  },
  {
    id: nanoid(),
    position: [20, 12, -28],
    texture: glassTexture
  },

  {
    id: nanoid(),
    position: [19, 12, -26],
    texture: glassTexture
  },
  {
    id: nanoid(),
    position: [19, 12, -27],
    texture: glassTexture
  },
  {
    id: nanoid(),
    position: [19, 12, -28],
    texture: glassTexture
  }
]

export const initialMaterial = dirtTexture
