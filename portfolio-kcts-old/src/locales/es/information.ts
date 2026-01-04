import { getLocaleInformation } from '../constants/information'

export const newInformation = {
  name: {
    name: 'Nombre'
  },
  location: {
    name: 'Ubicación',
    answer: 'Norte de Santander, Ocaña'
  },
  university: {
    name: 'Universidad'
  }
}

export const information = {
  name: 'Información',
  information: getLocaleInformation(newInformation)
}
