export const processEnv = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port_db: process.env.port_db,
  PORT: process.env.PORT,
  database_name: process.env.database_name,
  url: process.env.url
}

export const corsOptions = {
  origin: ['https://2048-clone-tawny.vercel.app']
}
