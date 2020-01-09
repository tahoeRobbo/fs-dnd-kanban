import express from 'express'
import { groupController } from './group.controller'

const groupRouter = express.Router()

groupRouter
  .route('/')
  .get(groupController.getAllGroups)

export default groupRouter
