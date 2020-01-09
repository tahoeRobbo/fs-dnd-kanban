import express from 'express'
import { getCollectionData, updateTask } from '../../server'
import { taskController } from './task.controller'

const tasksRouter = express.Router()

tasksRouter
  .route('/')
  .get(taskController.getTasks)
  .post(taskController.postTask)

tasksRouter
  .route('/update')
  .post(taskController.postTaskUpdate)

export default tasksRouter
