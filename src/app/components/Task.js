import React from 'react'
import PropTypes from 'prop-types'

function Task ({ task }) {
  const { name, id } = task
  return (
    <div id={id}>
      {name}
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task
