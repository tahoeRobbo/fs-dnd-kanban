import { postNewTask } from '../utils/api'

export const UPDATE_TASK_GROUP = 'UPDATE_TASK_GROUP'
export const ADD_TASK = 'ADD_TASK'

// export function handleChangeTaskGroup (taskId) => {
//   return (dispatch) => {
//
//   }
// }

export function updateTaskGroup (taskId, groupId) {
  return {
    type: UPDATE_TASK_GROUP,
    taskId,
    groupId
  }
}

export function handleAddTask (name) {
  return (dispatch) => {
    postNewTask(name)
      .then((res) => res.json())
      .then((task) => dispatch(addTask(task)))
      .catch((err) => console.log(`Failed to post new task, ${err}`))
  }
}

export function addTask (task) {
  return {
    type: ADD_TASK,
    task
  }
}
