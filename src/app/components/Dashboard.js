import React from 'react'
import { useSelector } from 'react-redux'

import Group from './Group'

function Dashboard () {
  const groups = useSelector( state => {
    const groupKeys = Object.keys(state.groups)

    return groupKeys.map((key) => state.groups[key])
  })

  return (
    <>
      <h1>Dashboard</h1>
      <div className='flex flex-row justify-between'>
        {groups.map((group) => (
          <Group key={group.id} group={group} />
        ))}
      </div>
    </>
  )
}

export default Dashboard
