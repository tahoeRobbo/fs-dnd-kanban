import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import { connectMongoose } from './connect-mongoose'

import taskRouter from './resources/task/task.routes'
import groupRouter from './resources/group/group.routes'
import userRouter from './resources/user/user.routes'

import { protect, signin, signup } from './utils/auth'

const port = process.env.PORT || 8001

const app = express()

app.use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  morgan('dev')
)

app.use('/signup', signup)
app.use('/signin', signin)

app.use('/api', protect)
app.use('/api/group', groupRouter)
app.use('/api/task', taskRouter)
app.use('api/user', userRouter)

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
