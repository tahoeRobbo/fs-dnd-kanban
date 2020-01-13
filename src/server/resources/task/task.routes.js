import express from 'express'
import { taskController, taskCrudControllers } from './task.controller'
import { formatNewTask } from './task.middleware'

const taskRouter = express.Router()

taskRouter
  .route('/')
  .get(taskCrudControllers.getMany)
  .post(formatNewTask, taskCrudControllers.createOne)

taskRouter
  .route('/:id')
  .post(taskController.postTaskUpdate)

export default taskRouter
