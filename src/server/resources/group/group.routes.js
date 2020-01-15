import express from 'express'
import { groupCrudControllers } from './group.controller'

const groupRouter = express.Router()

groupRouter
  .route('/')
  .get(groupCrudControllers.getMany)

export default groupRouter
