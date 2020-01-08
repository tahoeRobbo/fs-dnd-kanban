import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connectDB } from './connect-db'
import { formatNewTask } from './utils/helpers'

import tasksRouter from './routes/task-routes'
import groupsRouter from './routes/group-routes'
import authRouter from './routes/auth-routes'

const port = process.env.PORT || 8888

const app = express()

app.listen(port, () => console.log(`server listening on port ${port}`))

export async function addNewTask (name) {
  const db = await connectDB()
  const collection = db.collection('tasks')
  const formattedTask = formatNewTask(name)
  await collection.insertOne(formattedTask)
  return formattedTask
}

export async function getCollectionData (collectionName) {
  const db = await connectDB()
  return db.collection(collectionName).find({}).toArray()
}

app.use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
)

export async function updateTask (task) {
  const { id, name, group, isComplete } = task
  const collection = await connectDB().collection('tasks')

  if (group) {
    await collection.updateOne({ id }, { $set: { group } })
  }

  if (name) {
    await collection.updateOne({ id }, { $set: { name } })
  }

  if (isComplete !== undefined) {
    const completed = Date.now()
    await collection.updateOne(
      { id },
      {
        $set: {
          isComplete,
          completed
        }
      })
      .then(() => { task.completed = completed })
  }

  return task
}

app.use('/', tasksRouter)
app.use('/', groupsRouter)
app.use('/task', tasksRouter)
app.use('/auth', authRouter)
