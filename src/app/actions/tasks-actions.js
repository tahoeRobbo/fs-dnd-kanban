// export function handleChangeTaskGroup (taskId) => {
//   return (dispatch) => {
//
//   }
// }
export const UPDATE_TASK_GROUP = 'UPDATE_TASK_GROUP'

export function updateTaskGroup (taskId, groupId) {
  console.log('taskId, groupId inside updateTaskGroup', taskId, groupId)
  return {
    type: UPDATE_TASK_GROUP,
    taskId,
    groupId
  }
}
