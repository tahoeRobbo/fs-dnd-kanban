import express from 'express'
import { taskCrudControllers } from './task.controller'
import { addCompletedTime, formatNewTask } from './task.middleware'

const taskRouter = express.Router()

taskRouter
  .route('/')
  .get(taskCrudControllers.getMany)
  .post(formatNewTask, taskCrudControllers.createOne)

taskRouter
  .route('/:id')
  .get(taskCrudControllers.getOne)
  .put(addCompletedTime, taskCrudControllers.updateOne)
  .delete(taskCrudControllers.removeOne)

export default taskRouter
