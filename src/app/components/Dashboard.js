import React from 'react'
import { useSelector } from 'react-redux'

function Dashboard () {
  const { users, groups, tasks, comments } = useSelector( state => state )
  console.log('users, groups, tasks, comments', users, groups, tasks, comments)
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
