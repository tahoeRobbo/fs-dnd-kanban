import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connectDB } from './connect-db'
import { formatNewTask } from './utils/helpers'

let port = 8888

const app = express()

app.listen(port, () => console.log(`server listening on port ${port}`))

export async function addNewTask (name) {
  let db = await connectDB()
  let collection = db.collection('tasks')
  let formattedTask = formatNewTask(name)
  await collection.insertOne(formattedTask)
  return formattedTask
}

app.use(
  cors(),
  bodyParser.urlencoded({extended: true}),
  bodyParser.json()
)

export async function updateTask (task) {
  let { id, name, group, isComplete } = task
  let collection = await connectDB().collection('tasks')

  if (group) {
    await collection.updateOne({id}, {$set:{group}})
  }

  if (name) {
    await collection.updateOne({id}, {$set:{name}})
  }

  if (isComplete !== undefined) {
    let completed = Date.now()
    await collection.updateOne(
      {id},
      {$set: {
          isComplete,
          completed
        }
      })
      .then(() => task.completed = completed)
  }

  return task
}

app.post('/task/new', async (req, res) => {
  let { taskName } = req.body
  let formattedTask = await addNewTask(taskName)
  res.status(200).send(formattedTask)
})

app.post('/task/update', async (req, res) => {
  let { task } = req.body
  await updateTask(task)
  res.status(200).send()
})

