import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { connectDB } from './connect-db'

import taskRouter from './resources/task/task.routes'
import groupRouter from './resources/group/group.routes'
import authRouter from './routes/auth-routes'

const port = process.env.PORT || 8888

const app = express()

export async function getCollectionData (collectionName) {
  const db = await connectDB()
  return db.collection(collectionName).find({}).toArray()
}

app.use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  morgan('dev')
)

app.use('/api/group', groupRouter)
app.use('/api/task', taskRouter)
app.use('/auth', authRouter)

app.listen(port, () => console.log(`server listening on port ${port}`))
