import { createConnection, Connection } from 'mysql2/promise'
import { processEnv } from '../constants/env'
import { Request, Response } from 'express'
import { userType } from '../constants/userType'

const config = {
  host: processEnv.host,
  user: processEnv.user,
  password: processEnv.password,
  port: Number(processEnv.port_db)
}

const { database_name: databaseName } = processEnv
const databaseSentence = databaseName ?? ''

async function getConnection (): Promise<Connection> {
  return createConnection(config)
}

export const usersModel = {
  async getUsers (_: Request, res: Response): Promise<void> {
    const connection = await getConnection()
    try {
      const [result] = await connection.query(`SELECT user_name, score, id FROM ${databaseSentence}.users ORDER BY score DESC`)
      const users = (result as userType[]).map(user => {
        const newUser = {
          ...user,
          userName: user.user_name
        }

        delete newUser.user_name

        return newUser
      })

      res.json(users)
    } catch (error: any) {
      res.status(500).json({
        error: 'Internal Server Error',
        message: []
      })
    }
    await connection.end()
  },
  async postUser (req: Request, res: Response): Promise<void> {
    const connection = await getConnection()
    try {
      const { userName, score }: { userName: string, score: string } = req.body
      const [result] = await connection.query(
        `INSERT INTO ${databaseSentence}.users (user_name, score) VALUES(?, ?)`,
        [userName, score]
      )
      res.json(result)
    } catch (error) {
      res.status(500).json({
        error: 'Internal Server Error',
        message: []
      })
    }

    await connection.end()
  }

}
