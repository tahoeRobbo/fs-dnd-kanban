import { Router } from 'express'
import { userController } from './user.controller'

const userRouter = Router()

userRouter.route('/')
  .get(userController.getCurrentUser)
  .put(userController.updateCurrentUser)

export default userRouter
