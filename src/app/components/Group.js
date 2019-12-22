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
    <>
      <h2>{name}</h2>
      {tasksInGroup.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  )
}

Group.propTypes = {
  group: PropTypes.object.isRequired
}

export default Group
