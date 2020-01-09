import { generateId } from '../../utils/helpers'
import { connectDB } from '../../connect-db'
import { getAllFromCollection } from '../../utils/crud'

export const taskController = {
  getTasks,
  postTask,
  postTaskUpdate
}

export async function postTask (req, res) {
  try {
    const formattedTask = await addNewTask(req.body.taskName)
    res.status(200).send(formattedTask)
  } catch (err) {
    console.error(err)
  }
}

export async function getTasks (req, res) {
  try {
    const tasks = await getAllFromCollection('tasks')
    res.status(200).send(tasks)
  } catch (err) {
    console.error(err)
  }
}

export async function postTaskUpdate (req, res) {
  try {
    const updatedTask = await updateTask(req.body)
    res.status(200).send(updatedTask)
  } catch (err) {
    console.error(err)
  }
}

function formatNewTask (name) {
  return {
    name,
    id: generateId(),
    group: 'G1',
    owner: 'U1', // todo update once auth implemented,
    created: Date.now(),
    isComplete: false
  }
}

export async function addNewTask (name) {
  const db = await connectDB()
  const collection = db.collection('tasks')
  const formattedTask = formatNewTask(name)
  await collection.insertOne(formattedTask)
  return formattedTask
}

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
