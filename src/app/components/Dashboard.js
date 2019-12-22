import React from 'react'
import { useSelector } from 'react-redux'

import Group from './Group'

function Dashboard () {
  const { users, groups, tasks, comments } = useSelector( state => state )
  console.log('users, groups, tasks, comments', users, groups, tasks, comments)
  return (
    <>
      <h1>Dashboard</h1>
      {groups.map((group) => (
        <Group key={group.id} group={group} />
      ))}
    </>
  )
}

export default Dashboard
