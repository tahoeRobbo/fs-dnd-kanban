import { getTasks, postNewTask, postUpdateTask } from '../utils/api'

export const UPDATE_TASK = 'UPDATE_TASK'
export const ADD_TASK = 'ADD_TASK'
export const SET_TASKS = 'SET_TASKS'

export function handleGetTasks () {
  return (dispatch) => {
    getTasks()
      .then((tasks) => {
        dispatch(setTasks(tasks))
      })
      .catch((err) => console.log(`Failed to get task, ${err}`))
  }
}

function setTasks (tasks) {
  return {
    type: SET_TASKS,
    tasks
  }
}

export function handleUpdateTask (task) {
  return (dispatch) => {
    postUpdateTask(task)
      .then((res) => res.json())
      .then(({ data }) => {
        dispatch(updateTask(data))
      })
      .catch((err) => console.log(`Failed to update task, ${err}`))
  }
}

function updateTask (task) {
  return {
    type: UPDATE_TASK,
    task
  }
}

export function handleAddTask (name) {
  return (dispatch) => {
    postNewTask(name)
      .then((res) => res.json())
      .then(({ data }) => dispatch(addTask(data)))
      .catch((err) => console.log(`Failed to post new task, ${err}`))
  }
}

export function addTask (task) {
  return {
    type: ADD_TASK,
    task
  }
}
