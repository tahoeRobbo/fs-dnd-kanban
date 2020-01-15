import React from 'react'
import PropTypes from 'prop-types'

function Task ({ task }) {
  const { name, _id } = task

  const handleDragStart = (e) => {
    e.dataTransfer.setData('_id', _id)
  }
  return (
    <div
      draggable
      className='text-red-900 w-4/5 bg-red-100 px-10 py-3 m-auto mb-3'
      id={_id}
      onDragStart={(e) => handleDragStart(e, _id)}
    >
      {name}
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task
