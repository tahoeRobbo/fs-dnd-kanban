import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connectDB } from './connect-db'
import { formatNewTask } from './utils/helpers'

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

app.get('/groups', async (req, res) => {
  await getCollectionData('groups')
    .then((groups) => res.send(groups))
    .catch((err) => res.send((err)))
})

app.get('/tasks', async (req, res) => {
  await getCollectionData('tasks')
    .then((tasks) => res.send(tasks))
    .catch((err) => res.send((err)))
})

app.post('/task/new', async (req, res) => {
  const { taskName } = req.body
  const formattedTask = await addNewTask(taskName)
  res.status(200).send(formattedTask)
})

app.post('/task/update', async (req, res) => {
  const { task } = req.body
  await updateTask(task)
  res.status(200).send(task)
})
