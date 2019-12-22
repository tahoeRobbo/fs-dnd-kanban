import React from 'react'
import PropTypes from 'prop-types'

function Task ({ task }) {
  const { name, id } = task
  return (
    <div className='text-red-900 w-4/5 bg-red-100 px-10 py-3 m-auto mb-3' id={id}>
      {name}
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task
