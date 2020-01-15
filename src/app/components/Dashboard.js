import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Group from './Group'
import AddTodo from './AddTodo'
import { handleGetInitialData } from '../actions/shared'

function Dashboard () {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users)

  React.useEffect(() => {
    dispatch(handleGetInitialData())
  }, [user])

  const { groups } = useSelector(store => store)

  return (
    <>
      <div className='flex flex-row justify-between'>
        {groups.length > 0 && groups.map((group) => (
          <Group key={group._id} group={group} />
        ))}
      </div>
      <AddTodo />
    </>
  )
}

export default Dashboard
