import { addNewTask, updateTask } from './server'

let newTask

(async function tasksTest () {
  console.log('Adding new task... ')

  await addNewTask('Kick the Cat')
  .then((task) => {
    console.log('new task from server spec', task)
    newTask = task
  })
  .catch((err) => console.log('err', err))

  console.log('Updating task...')

  await updateTask({...newTask, isComplete: true})
  .then((task) => {
    console.log('Task Updated Successfully ', task)
    process.exit()
  })
  .catch((err)  => console.log(`failed updating task, ${err}`))
})()



