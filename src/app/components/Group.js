import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import Task from './Task'

function Group ({ group }) {
  const { name, id } = group
  const tasksInGroup = useSelector( store => {
    return store.tasks.filter((task) => task.group === id)
  })

  return (
    <div className='w-full bg-blue-300 text-center m-2'>
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
