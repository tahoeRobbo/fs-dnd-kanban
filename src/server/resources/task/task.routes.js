import express from 'express'
import { taskController } from './task.controller'

const taskRouter = express.Router()

taskRouter
  .route('/')
  .get(taskController.getTasks)
  .post(taskController.postTask)

taskRouter
  .route('/update')
  .post(taskController.postTaskUpdate)

export default taskRouter
