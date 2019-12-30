import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { handleUpdateTask } from '../actions/tasks-actions'

import Task from './Task'

function Group ({ group }) {
  const { name, id } = group
  const {tasks} = useSelector(store => store)
  const dispatch = useDispatch()

  const tasksInGroup = tasks.filter((task) => task.group === id)

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData('id')
    const task = {
      id,
      group: group.id
    }
    dispatch(handleUpdateTask({ task }))
  }

  return (
    <div
      className='w-full bg-blue-300 text-center mr-2'
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
