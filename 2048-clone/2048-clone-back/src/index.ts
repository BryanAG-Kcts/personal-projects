import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { corsOptions, processEnv } from './constants/env'
import { userEndpoint } from './routes/users'
import { endpoints } from './constants/endpoints'

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
userEndpoint(app)

const PORT = processEnv.PORT ?? 3000

app.get('/', (req, res) => {
  const { host } = req.headers
  const possbileEndpoints = Object.values(endpoints).map(endpoint => `https://${host ?? `localhost:${PORT}`}${endpoint}`)
  res.json(possbileEndpoints)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
