import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { updateTaskGroup } from '../actions/tasks-actions'

import Task from './Task'

function Group ({ group }) {
  const { name, id } = group
  const tasksInGroup = useSelector( store => {
    // return store.tasks.filter((task) => task.group === id)
    const taskKeys = Object.keys(store.tasks)
    return taskKeys.map((key) => store.tasks[key])
      .filter((task) => task.group === id)
  })

  const dispatch = useDispatch()


  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData('id')
    console.log('task from handleDrop', id)
    console.log('group.id', group.id)
    dispatch(updateTaskGroup(id, group.id))
  }

  return (
    <div
      className='w-full bg-blue-300 text-center m-2'
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
    >
      <h2 className='font-bold text-2xl'>{name}</h2>
      {tasksInGroup.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}

Group.propTypes = {
  group: PropTypes.object.isRequired
}

export default Group
