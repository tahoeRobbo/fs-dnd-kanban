import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Group from './Group'
import AddTodo from './AddTodo'
import useLoggedIn from '../hooks/useLoggedIn'

import { handleGetTasks } from '../actions/tasks-actions'

function Dashboard () {
  const dispatch = useDispatch()
  const loggedIn = useLoggedIn()
  const { groups } = useSelector(store => store)

  React.useEffect(() => {
    if (loggedIn) {
      console.log('loggedIn', loggedIn)
      setTimeout(() => {
        dispatch(handleGetTasks())
      }, 50)
    }
  }, [loggedIn])

  return (
    <>
      <div className='flex flex-row justify-between'>
        {groups.length > 0 && groups.map((group) => (
          <Group key={group.id} group={group} />
        ))}
      </div>
      <AddTodo />
    </>
  )
}

export default Dashboard
