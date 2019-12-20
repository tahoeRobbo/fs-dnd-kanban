import React from 'react'
import { useSelector } from 'react-redux'

function Dashboard () {
  const { users, groups, tasks, comments } = useSelector( state => state )
  console.log('users, groups, tasks, comments', users, groups, tasks, comments)
  return (
    <>
      <h1>Dashboard</h1>
      {groups.map((group) => (
        <div key={group.id}>{group.name}</div>
      ))}
    </>
  )
}

export default Dashboard
