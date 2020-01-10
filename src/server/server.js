import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import { connectMongoose } from './connect-mongoose'

import taskRouter from './resources/task/task.routes'
import groupRouter from './resources/group/group.routes'
import authRouter from './routes/auth-routes'

const port = process.env.PORT || 8001

const app = express()

app.use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  morgan('dev')
)

app.use('/api/group', groupRouter)
app.use('/api/task', taskRouter)
app.use('/auth', authRouter)

export async function start () {
  try {
    await connectMongoose()
    app.listen(port, () => {
      console.log(`React DND server connected on http://localhost:${port}`)
    })
  } catch (e) {
    console.error(e)
  }
}
