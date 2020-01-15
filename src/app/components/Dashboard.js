import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Group from './Group'
import AddTodo from './AddTodo'
import { handleGetGroups } from '../actions/groups-actions'
import { handleGetInitialData } from '../actions/shared'

function Dashboard () {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users)
  if (user._id) {
    React.useEffect(() => {
      dispatch(handleGetInitialData())
    }, [user])
  }

  const { groups } = useSelector(store => store)

  return (
    <>
      <div className='flex flex-row justify-between'>
        {groups.map((group) => (
          <Group key={group._id} group={group} />
        ))}
      </div>
      <AddTodo />
    </>
  )
}

export default Dashboard
