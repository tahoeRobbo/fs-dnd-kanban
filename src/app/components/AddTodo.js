import React from 'react'
import { useDispatch } from 'react-redux'

import { formatNewTask } from '../utils/helpers'
import { addTask } from '../actions/tasks-actions'

function AddTodo () {
  const [text, setText] = React.useState('')
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    e.preventDefault
    setText(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    const formattedTask = formatNewTask(text)
    dispatch(addTask(formattedTask))
    setText('')
  }

  return (
    <>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={handleInputChange}
          placeholder='Add a task'
          type='text'
          name='task'
          className='border border-blue-400'
        />
        <button>Add</button>
      </form>
    </>
  )
}

export default AddTodo
