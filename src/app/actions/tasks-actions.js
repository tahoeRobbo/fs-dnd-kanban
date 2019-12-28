// export function handleChangeTaskGroup (taskId) => {
//   return (dispatch) => {
//
//   }
// }
export const UPDATE_TASK_GROUP = 'UPDATE_TASK_GROUP'
export const ADD_TASK = 'ADD_TASK'

export function updateTaskGroup (taskId, groupId) {
  return {
    type: UPDATE_TASK_GROUP,
    taskId,
    groupId
  }
}

export function addTask (task) {
  return {
    type: ADD_TASK,
    task
  }
}
