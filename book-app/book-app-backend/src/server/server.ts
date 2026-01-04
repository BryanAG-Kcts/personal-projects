import express, { Express } from 'express'
import { bookRouter } from '../routes/book'
import cors from 'cors'

export class Server {
  private app: Express
  private port = 3000

  constructor() {
    this.app = express()
  }

  private middlewares() {
    this.app.use(express.json())
    this.app.use(cors())
  }

  private routes() {
    this.app.use('/books', bookRouter)
    this.app.all('/{*any}', (_req, res) => {
      res.status(404).json({
        message: 'Not found',
        status: 404
      })
    })
  }

  public start() {
    this.middlewares()
    this.routes()
    this.app.listen(this.port, () => {
      console.log(`Server listening in http://localhost:${this.port}`)
    })
  }
}
