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
  .get(taskCrudControllers.getOne)
  .put(taskController.postTaskUpdate)
  .delete(taskCrudControllers.removeOne)

export default taskRouter
