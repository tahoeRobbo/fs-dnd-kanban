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
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={handleInputChange}
          placeholder='Add a task'
          type='text'
          name='task'
          autoComplete='off'
          className='border border-blue-400 mt-4'
        />
        <button className='ml-2 bg-blue-400 px-3 rounded text-white'>Add</button>
      </form>
    </>
  )
}

export default AddTodo
