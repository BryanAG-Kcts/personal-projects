import { Express, Router } from 'express'
// import { usersModel } from '../models/mySQL'
import { usersModel } from '../models/pgSQL'
import { endpoints } from '../constants/endpoints'

const { getUsers, postUser } = usersModel
const router = Router()
export function userEndpoint (app: Express): void {
  router.get('/', getUsers)
  router.post('/', postUser)
  app.use(endpoints.users, router)
}
