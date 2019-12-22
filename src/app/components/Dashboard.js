import React from 'react'
import { useSelector } from 'react-redux'

import Group from './Group'

function Dashboard () {
  const { users, groups, tasks, comments } = useSelector( state => state )
  console.log('users, groups, tasks, comments', users, groups, tasks, comments)
  return (
    <div className='flex flex-row space-between'>
      <h1>Dashboard</h1>
      {groups.map((group) => (
        <Group key={group.id} group={group} />
      ))}
    </div>
  )
}

export default Dashboard
