import { getLocaleInformation } from '../constants/information'

export const newInformation = {
  name: {
    name: 'Name'
  },
  location: {
    name: 'Located at',
    answer: 'North of Santander, Ocaña'
  },
  university: {
    name: 'University'
  }
}

export const information = {
  name: 'Información',
  information: getLocaleInformation(newInformation)
}
