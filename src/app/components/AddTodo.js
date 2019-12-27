import React from 'react'

function AddTodo () {
  const [text, setText] = React.useState('')
  const handleInputChange = (e) => {
    e.preventDefault

    setText(e.target.value)
  }

  function handleSubmit(){}
  return (
    <>
      <h2>Add Task</h2>
      <input
        value={text}
        onChange={handleInputChange}
        placeholder='Add a task'
        type='text'
        name='task'
        className='border border-blue-400'
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  )
}

export default AddTodo
