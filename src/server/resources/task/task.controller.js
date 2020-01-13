import { crudControllers } from '../../utils/crud'
import { Task } from './task.model'

export const taskCrudControllers = crudControllers(Task)
export const taskController = {
  getTasks,
  postTaskUpdate
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

export async function updateTask (task) {
  // const { id, name, group, isComplete } = task
  // // const collection = await connectDB().collection('tasks')
  //
  // if (group) {
  //   await collection.updateOne({ id }, { $set: { group } })
  // }
  //
  // if (name) {
  //   await collection.updateOne({ id }, { $set: { name } })
  // }
  //
  // if (isComplete !== undefined) {
  //   const completed = Date.now()
  //   await collection.updateOne(
  //     { id },
  //     {
  //       $set: {
  //         isComplete,
  //         completed
  //       }
  //     })
  //     .then(() => { task.completed = completed })
  // }
  //
  // return task
}
