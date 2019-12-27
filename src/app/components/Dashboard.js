import React from 'react'
import { useSelector } from 'react-redux'

import Group from './Group'
import AddTodo from './AddTodo'

function Dashboard () {
  const { groups } = useSelector(store => store)

  return (
    <>
      <h1>Dashboard</h1>
      <div className='flex flex-row justify-between'>
        {groups.map((group) => (
          <Group key={group.id} group={group} />
        ))}
      </div>
      <AddTodo />
    </>
  )
}

export default Dashboard
