import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Group from './Group'
import AddTodo from './AddTodo'
import { handleGetInitialData } from '../actions/shared'

function Dashboard () {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(handleGetInitialData())
  }, [])

  const { groups } = useSelector(store => store)
  console.log('groups', groups)

  return (
    <>
      <div className='flex flex-row justify-between'>
        {groups.length && groups.map((group) => (
          <Group key={group.id} group={group} />
        ))}
      </div>
      <AddTodo />
    </>
  )
}

export default Dashboard
