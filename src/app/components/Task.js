import React from 'react'
import PropTypes from 'prop-types'

function Task ({ task }) {
  const { name, id } = task

  const handleDragStart = (e, id) => {
    console.log('task in handleDragStart', id)
    e.dataTransfer.setData('id', id)
  }
  return (
    <div
      draggable
      className='text-red-900 w-4/5 bg-red-100 px-10 py-3 m-auto mb-3' id={id}
      onDragStart={(e) => handleDragStart(e, id)}
    >
      {name}
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task
