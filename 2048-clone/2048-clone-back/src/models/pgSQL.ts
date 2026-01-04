import { Client } from 'pg'
import { processEnv } from '../constants/env'
import { Request, Response } from 'express'
import { userType } from '../constants/userType'

const client = new Client({
  user: processEnv.user,
  host: processEnv.host,
  port: Number(processEnv.port_db),
  database: processEnv.database_name,
  password: processEnv.password,
  connectionString: processEnv.url

})

void (async () => {
  await client.connect()
})()

export const usersModel = {
  async getUsers (_: Request, res: Response): Promise<void> {
    try {
      const result = await client.query('SELECT user_name, score, id FROM users ORDER BY score DESC')
      const users = (result.rows as userType[]).map(user => {
        const newUser = {
          ...user,
          userName: user.user_name
        }

        delete newUser.user_name

        return newUser
      })

      res.json(users)
    } catch (error) {
      res.status(500).json({
        error: 'Internal Server Error',
        message: []
      })
    }
  },
  async postUser (req: Request, res: Response): Promise<void> {
    try {
      const { userName, score } = req.body
      const result = await client.query(
        'INSERT INTO users (user_name, score) VALUES($1, $2)',
        [userName, score]
      )

      res.json({ result: result.rows })
    } catch (error) {
      res.status(500).json({
        error: 'Internal Server Error',
        message: []
      })
    }
  }
}
