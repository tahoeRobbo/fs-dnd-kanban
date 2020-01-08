import express from 'express'
import { addNewTask, getCollectionData, updateTask } from '../server'

const tasksRouter = express.Router()

tasksRouter.route('/tasks')
  .get(async (req, res) => {
    await getCollectionData('tasks')
      .then((tasks) => res.send(tasks))
      .catch((err) => res.send(err))
  })

tasksRouter.route('/new')
  .post(async (req, res) => {
    const { taskName } = req.body
    const formattedTask = await addNewTask(taskName)
    res.status(200).send(formattedTask)
  })

tasksRouter.route('/update')
  .post(async (req, res) => {
    const { task } = req.body
    await updateTask(task)
    res.status(200).send(task)
  })

export default tasksRouter
