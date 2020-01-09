import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { connectDB } from './connect-db'
import { formatNewTask } from './utils/helpers'
import tasksRouter from './resources/task/task.routes'
import groupsRouter from './routes/group-routes'
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

app.use('/api/group', groupsRouter)
app.use('/api/task', tasksRouter)
app.use('/auth', authRouter)

app.listen(port, () => console.log(`server listening on port ${port}`))
