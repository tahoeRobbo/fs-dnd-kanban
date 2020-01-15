import { crudControllers } from '../../utils/crud'
import { Task } from './task.model'

export const taskCrudControllers = crudControllers(Task)
